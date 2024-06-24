import { AuthUser, getUserFromRequest } from "~/server/api/auth";

export async function authHandler(
  request: Request,
  handler: (authUser: AuthUser) => Promise<Response>,
) {
  const user = await getUserFromRequest(request);

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  return await handler(user);
}
