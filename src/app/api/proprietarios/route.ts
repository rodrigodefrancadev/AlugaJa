import { authHandler } from "../_helper/auth-handler";
import { UseCaseFactory } from "~/factories/user-case.factory";
import { proprietarioPropsSchema } from "~/domain/entities/proprietario";

export function POST(request: Request) {
  return authHandler(request, async (user) => {
    const useCase = UseCaseFactory.cadastrarProprietario(user.id);
    const body = await request.json();
    const input = proprietarioPropsSchema.safeParse(body);
    if (!input.success) {
      return Response.json({ error: input.error });
    }
    const proprietario = await useCase.execute(input.data);
    return Response.json(proprietario);
  });
}

export function GET(request: Request) {
  return authHandler(request, async (user) => {
    const useCase = UseCaseFactory.listarProprietarios(user.id);
    const proprietarios = await useCase.execute();
    return Response.json(proprietarios);
  });
}
