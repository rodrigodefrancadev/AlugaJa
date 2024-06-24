import { UseCase } from "~/commom/use-case";
import {
  ContratoDeAluguel,
  ContratoDeAluguelProps,
} from "../entities/contrato-de-aluguel";
import { ContratoDeAluguelRepository } from "../repositories/contrato-de-aluguel.repository";

export class CadastrarContratoDeAluguelUseCase extends UseCase<
  ContratoDeAluguelProps,
  ContratoDeAluguel
> {
  constructor(
    private readonly contratoDeAluguelRepository: ContratoDeAluguelRepository,
  ) {
    super();
  }

  async execute(input: ContratoDeAluguelProps): Promise<ContratoDeAluguel> {
    const contratoDeAluguel =
      await this.contratoDeAluguelRepository.cadastrarContratoDeAluguel(input);
    return contratoDeAluguel;
  }
}
