import { UseCase } from "~/commom/use-case";
import {
  ImovelRepository,
  ListarImoveisFiltro,
} from "../repositories/imovel.repository";
import { Imovel } from "../entities/imovel";

interface Input {
  filtro?: ListarImoveisFiltro;
}

export class ListarImoveisUseCase extends UseCase<Input, Imovel[]> {
  constructor(private readonly imovelRepository: ImovelRepository) {
    super();
  }

  async execute({ filtro }: Input): Promise<Imovel[]> {
    const imoveis = await this.imovelRepository.listarImoveis(filtro);
    return imoveis;
  }
}
