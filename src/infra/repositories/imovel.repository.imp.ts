import { PrismaClient, Imovel as ImovelDb } from "@prisma/client";
import { Imovel, ImovelProps } from "~/domain/entities/imovel";
import {
  ImovelRepository,
  ListarImoveisFiltro,
} from "~/domain/repositories/imovel.repository";

export class ImovelRepositoryImp implements ImovelRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async cadastrarImovel(dados: ImovelProps): Promise<Imovel> {
    const imovelDb = await this.prisma.imovel.create({
      data: dados,
    });
    const imovel = this.imovelDbToImovel(imovelDb);
    return imovel;
  }

  async listarImoveis(filtro?: ListarImoveisFiltro): Promise<Imovel[]> {
    const imoveisDb = await this.prisma.imovel.findMany({
      where:
        filtro !== undefined
          ? {
              proprietarioId: filtro.proprietarioId,
            }
          : undefined,
    });
    const imoveis = imoveisDb.map((imovelDb) =>
      this.imovelDbToImovel(imovelDb),
    );
    return imoveis;
  }

  async detalharImovelPorId(id: string): Promise<Imovel> {
    const imovelDb = await this.prisma.imovel.findUnique({
      where: {
        id,
      },
    });
    if (!imovelDb) {
      throw new Error("Imovel não encontrado");
    }
    const imovel = this.imovelDbToImovel(imovelDb);
    return imovel;
  }

  private imovelDbToImovel(imovelDb: ImovelDb): Imovel {
    return new Imovel(
      imovelDb.id,
      imovelDb.proprietarioId,
      imovelDb.apelido,
      imovelDb.endereco,
    );
  }
}
