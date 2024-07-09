import { z } from "zod";
import { login } from "~/server/api/auth";

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export async function POST(request: Request) {
  const body: unknown = await request.json();
  const credentials = schema.parse(body);
  const authUserWithToken = await login(credentials);
  if (!authUserWithToken) {
    return new Response("Invalid credentials", { status: 401 });
  }
  return Response.json(authUserWithToken);
}
