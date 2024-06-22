import { z } from "zod";
import { register } from "~/server/api/auth";

const schema = z.object({
  username: z.string().min(5).max(20),
  password: z.string().min(6).max(100),
});

export async function POST(request: Request) {
  const body = request.json();
  const credentials = schema.parse(body);
  const authUser = await register(credentials);
  return Response.json(authUser);
}
