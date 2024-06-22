import { z } from "zod";
import { login } from "~/server/api/auth";

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export async function POST(request: Request) {
  const body = request.json();
  const credentials = schema.parse(body);
  const authUserWithToken = await login(credentials);
  return Response.json(authUserWithToken);
}
