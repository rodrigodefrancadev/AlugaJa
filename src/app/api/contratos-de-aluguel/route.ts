import { UseCaseFactory } from "~/factories/user-case.factory";
import { authHandler } from "../_helper/auth-handler";
import { contratoDeAluguelPropsSchema } from "~/domain/entities/contrato-de-aluguel";
import { z } from "zod";
import { NextRequest } from "next/server";
import { da } from "date-fns/locale";

const schema = contratoDeAluguelPropsSchema.extend({
  dataInicio: z.string().pipe(z.coerce.date()),
  dataAssinatura: z.string().pipe(z.coerce.date()),
});

export function POST(request: Request) {
  return authHandler(request, async (user) => {
    const useCase = UseCaseFactory.cadastrarContratoDeAluguel(user.id);
    const body: unknown = await request.json();
    console.log("Body", body);
    const input = schema.safeParse(body);
    if (!input.success) {
      return Response.json({ error: input.error });
    }
    const contrato = await useCase.execute(input.data);
    return Response.json(contrato);
  });
}

export function GET(request: NextRequest) {
  return authHandler(request, async (user) => {
    const useCase = UseCaseFactory.listarContratosDeAluguel(user.id);
    const imovelId = request.nextUrl.searchParams.get("imovelId") ?? undefined;
    const clienteId =
      request.nextUrl.searchParams.get("clienteId") ?? undefined;

    const contratosDeAluguel = await useCase.execute({
      filtro: {
        imovelId,
        clienteId,
      },
    });
    return Response.json(contratosDeAluguel);
  });
}
