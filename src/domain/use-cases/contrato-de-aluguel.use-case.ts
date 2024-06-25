import { UseCase } from "~/commom/use-case";
import { ContratoDeAluguel } from "../entities/contrato-de-aluguel";
import { ContratoDeAluguelRepository } from "../repositories/contrato-de-aluguel.repository";

interface Input {
  id: string;
}

export class DetalharContratoDeAluguelUseCase extends UseCase<
  Input,
  ContratoDeAluguel
> {
  constructor(
    private readonly contratoDeAluguelRepository: ContratoDeAluguelRepository,
  ) {
    super();
  }

  async execute({ id }: Input): Promise<ContratoDeAluguel> {
    const contratoDeAluguel =
      await this.contratoDeAluguelRepository.detalharContratoDeAluguelPorId(id);
    return contratoDeAluguel;
  }
}
