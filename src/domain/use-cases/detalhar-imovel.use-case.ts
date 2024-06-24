import { UseCase } from "~/commom/use-case";
import { Imovel } from "../entities/imovel";
import { ImovelRepository } from "../repositories/imovel.repository";

interface Input {
  id: string;
}

export class DetalharImovelUseCase extends UseCase<Input, Imovel> {
  constructor(private readonly imovelRepository: ImovelRepository) {
    super();
  }

  async execute({ id }: Input): Promise<Imovel> {
    const imovel = await this.imovelRepository.detalharImovelPorId(id);
    return imovel;
  }
}
