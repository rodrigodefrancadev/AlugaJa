import { authHandler } from "../_helper/auth-handler";
import { UseCaseFactory } from "~/factories/user-case.factory";
import { imovelPropsSchema } from "~/domain/entities/imovel";
import { NextRequest } from "next/server";
import { NextApiRequest } from "next";

export function POST(request: Request) {
  return authHandler(request, async (user) => {
    const useCase = UseCaseFactory.cadastrarImovel(user.id);
    const body = await request.json();
    const input = imovelPropsSchema.safeParse(body);
    if (!input.success) {
      return Response.json({ error: input.error });
    }
    const imovel = await useCase.execute(input.data);
    return Response.json(imovel);
  });
}

export function GET(request: NextRequest) {
  return authHandler(request, async (user) => {
    const useCase = UseCaseFactory.listarImoveis(user.id);
    const proprietarioId = request.nextUrl.searchParams.get("proprietarioId");
    const imoveis = await useCase.execute({
      filtro: proprietarioId ? { proprietarioId } : undefined,
    });
    return Response.json(imoveis);
  });
}
