import { z } from "zod";
import { getErrorMessage } from "~/commom/get-error-message";
import { register } from "~/server/api/auth";

const schema = z.object({
  username: z.string().min(5).max(20),
  password: z.string().min(6).max(100),
});

export async function POST(request: Request) {
  const body = await request.json();
  const credentials = schema.safeParse(body);
  if (!credentials.success) {
    return Response.json({ error: credentials.error });
  }

  try {
    const authUser = await register(credentials.data);
    return Response.json(authUser);
  } catch (error) {
    return new Response(getErrorMessage(error), { status: 400 });
  }
}

//extract error message from error object
