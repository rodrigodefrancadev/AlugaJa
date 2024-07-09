import { clientePropsSchema } from "~/domain/entities/cliente";
import { authHandler } from "../_helper/auth-handler";
import { UseCaseFactory } from "~/factories/user-case.factory";

export function POST(request: Request) {
  return authHandler(request, async (user) => {
    const useCase = UseCaseFactory.cadastrarCliente(user.id);
    const body: unknown = await request.json();
    const input = clientePropsSchema.safeParse(body);
    if (!input.success) {
      return Response.json({ error: input.error });
    }
    const cliente = await useCase.execute(input.data);
    return Response.json(cliente);
  });
}

export function GET(request: Request) {
  return authHandler(request, async (user) => {
    const useCase = UseCaseFactory.listarClientes(user.id);
    const clientes = await useCase.execute();
    return Response.json(clientes);
  });
}
