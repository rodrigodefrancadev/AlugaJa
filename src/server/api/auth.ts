import { db } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "~/env";

export type AuthUser = {
  id: string;
  username: string;
};

type TokenInfo = {
  token: string;
  createdAt: string;
  expriresAt: string;
};

export type AuthUserWithToken = AuthUser & TokenInfo;

export interface AuthCredentials {
  username: string;
  password: string;
}

export async function login(
  credentials: AuthCredentials,
): Promise<AuthUserWithToken | null> {
  const user = await db.user.findFirst({
    where: {
      username: credentials.username,
    },
  });

  if (!user) {
    return null;
  }

  const passwordMatch = bcrypt.compareSync(credentials.password, user.password);
  if (!passwordMatch) {
    return null;
  }

  const authUser: AuthUser = {
    id: user.id,
    username: user.username,
  };

  const tokenInfo = await generateJwtToken(authUser);
  const authUserWithToken: AuthUserWithToken = {
    ...authUser,
    ...tokenInfo,
  };

  return authUserWithToken;
}

export async function register(
  credentials: AuthCredentials,
): Promise<AuthUser> {
  const existingUser = await db.user.findFirst({
    where: {
      username: credentials.username,
    },
  });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const hashedPassword = bcrypt.hashSync(credentials.password, 10);

  const user = await db.user.create({
    data: {
      username: credentials.username,
      password: hashedPassword,
    },
  });

  const authUser: AuthUser = {
    id: user.id,
    username: user.username,
  };

  return authUser;
}

export async function generateJwtToken(user: AuthUser): Promise<TokenInfo> {
  const token = jwt.sign(user, env.JWT_SECRET, {
    expiresIn: "1h",
  });
  const data = jwt.decode(token) as jwt.JwtPayload;

  if (data.exp === undefined || data.iat === undefined) {
    throw new Error("Invalid token");
  }

  const createdAt = new Date(data.iat * 1000).toISOString();
  const expriresAt = new Date(data.exp * 1000).toISOString();
  return {
    token,
    createdAt,
    expriresAt,
  };
}

export async function decodeAndVerifyJwtToken(
  token: string,
): Promise<AuthUser | null> {
  try {
    const user = jwt.verify(token, env.JWT_SECRET) as AuthUser;
    return user;
  } catch (error) {
    return null;
  }
}

export async function getUserFromRequest(req: { headers: Headers }) {
  const authorization = req.headers.get("authorization");
  if (authorization) {
    const user = await decodeAndVerifyJwtToken(
      authorization.split(" ")[1] ?? "",
    );
    return user;
  }
  return null;
}
