import { UseCase } from "~/commom/use-case";
import { Imovel, ImovelProps } from "../entities/imovel";
import { ImovelRepository } from "../repositories/imovel.repository";

export class CadastrarImovelUseCase extends UseCase<ImovelProps, Imovel> {
  constructor(private readonly imovelRepository: ImovelRepository) {
    super();
  }

  async execute(input: ImovelProps): Promise<Imovel> {
    const imovel = await this.imovelRepository.cadastrarImovel(input);
    return imovel;
  }
}
