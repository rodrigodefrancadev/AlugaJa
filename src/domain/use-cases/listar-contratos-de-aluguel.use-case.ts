import { UseCase } from "~/commom/use-case";
import {
  ContratoDeAluguelRepository,
  ListarContratosDeAluguelFiltro,
} from "../repositories/contrato-de-aluguel.repository";
import { ContratoDeAluguel } from "../entities/contrato-de-aluguel";

interface Input {
  filtro?: ListarContratosDeAluguelFiltro;
}

export class ListarContratosDeAluguelUseCase extends UseCase<
  Input,
  ContratoDeAluguel[]
> {
  constructor(
    private readonly contratoDeAluguelRepository: ContratoDeAluguelRepository,
  ) {
    super();
  }

  async execute({ filtro }: Input): Promise<ContratoDeAluguel[]> {
    const contratosDeAluguel =
      await this.contratoDeAluguelRepository.listarContratosDeAluguel(filtro);
    return contratosDeAluguel;
  }
}
