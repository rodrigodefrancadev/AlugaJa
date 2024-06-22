import { getUserFromRequest } from "~/server/api/auth";

export async function GET(request: Request) {
  const user = await getUserFromRequest(request);

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  return Response.json(user);
}
