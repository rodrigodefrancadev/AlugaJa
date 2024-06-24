import { UseCaseFactory } from "~/factories/user-case.factory";
import { authHandler } from "../_helper/auth-handler";
import { contratoDeAluguelPropsSchema } from "~/domain/entities/contrato-de-aluguel";
import { z } from "zod";

const schema = contratoDeAluguelPropsSchema.extend({
  dataInicio: z.string().pipe(z.coerce.date()),
});

export function POST(request: Request) {
  return authHandler(request, async (user) => {
    const useCase = UseCaseFactory.cadastrarContratoDeAluguel(user.id);
    const body = await request.json();
    console.log("Body", body);
    const input = schema.safeParse(body);
    if (!input.success) {
      return Response.json({ error: input.error });
    }
    const contrato = await useCase.execute(input.data);
    return Response.json(contrato);
  });
}
