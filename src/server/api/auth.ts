import { db } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "~/env";

export type AuthUser = {
  id: string;
  username: string;
};

export type AuthUserWithToken = AuthUser & {
  token: string;
};

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

  const token = await generateJwtToken(authUser);
  const authUserWithToken: AuthUserWithToken = {
    ...authUser,
    token,
  };

  return authUserWithToken;
}

export async function register(
  credentials: AuthCredentials,
): Promise<AuthUser | null> {
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

export async function getUserById(id: string): Promise<AuthUser | null> {
  const user = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    return null;
  }

  const authUser: AuthUser = {
    id: user.id,
    username: user.username,
  };

  return authUser;
}

export async function getUserByUsername(
  username: string,
): Promise<AuthUser | null> {
  const user = await db.user.findFirst({
    where: {
      username,
    },
  });

  if (!user) {
    return null;
  }

  const authUser: AuthUser = {
    id: user.id,
    username: user.username,
  };

  return authUser;
}

export async function generateJwtToken(user: AuthUser): Promise<string> {
  return jwt.sign(user, env.JWT_SECRET);
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
