import { ClienteProps, clientePropsSchema } from "~/domain/entities/cliente";
import { authHandler } from "../_helper/auth-handler";
import { UseCaseFactory } from "~/factories/user-case.factory";

export function POST(request: Request) {
  return authHandler(request, async (user) => {
    const useCase = UseCaseFactory.cadastrarCliente(user.id);
    const body = await request.json();
    const input = clientePropsSchema.safeParse(body);
    if (!input.success) {
      return Response.json({ error: input.error });
    }
    const cliente = await useCase.execute(input.data);
    return Response.json(cliente);
  });
}
