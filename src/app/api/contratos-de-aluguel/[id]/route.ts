import { UseCaseFactory } from "~/factories/user-case.factory";
import { authHandler } from "../../_helper/auth-handler";

export function GET(request: Request, { params }: { params: { id: string } }) {
  return authHandler(request, async (user) => {
    const useCase = UseCaseFactory.detalharContratoDeAluguel(user.id);
    const contratoDeAluguel = await useCase
      .execute({ id: params.id })
      .catch((_) => null);
    if (!contratoDeAluguel) {
      return new Response(null, { status: 404 });
    }
    return Response.json(contratoDeAluguel);
  });
}
