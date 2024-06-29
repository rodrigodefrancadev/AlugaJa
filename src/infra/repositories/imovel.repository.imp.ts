import { PrismaClient, Imovel as ImovelDb } from "@prisma/client";
import { Imovel, ImovelProps } from "~/domain/entities/imovel";
import { Endereco } from "~/domain/entities/value-objects/endereco";
import {
  ImovelRepository,
  ListarImoveisFiltro,
} from "~/domain/repositories/imovel.repository";

export class ImovelRepositoryImp implements ImovelRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly userId: string,
  ) {}

  async cadastrarImovel(dados: ImovelProps): Promise<Imovel> {
    const { proprietarioId, endereco, ...resto } = dados;
    const proprietarioDb = await this.prisma.proprietario.findUnique({
      where: {
        id: proprietarioId,
        userId: this.userId,
      },
    });

    if (!proprietarioDb) {
      throw new Error("Proprietário não encontrado");
    }

    const imovelDb = await this.prisma.imovel.create({
      data: {
        ...resto,
        proprietarioId,
        userId: this.userId,
        enderecoLogradouro: endereco.logradouro,
        enderecoNumero: endereco.numero,
        enderecoBairro: endereco.bairro,
        enderecoComplemento: endereco.complemento,
        enderecoCidade: endereco.cidade,
        enderecoEstado: endereco.estado,
      },
    });

    const imovel = this.imovelDbToImovel(imovelDb);
    return imovel;
  }

  async listarImoveis(filtro?: ListarImoveisFiltro): Promise<Imovel[]> {
    const imoveisDb = await this.prisma.imovel.findMany({
      where: {
        userId: this.userId,
        proprietarioId: filtro?.proprietarioId,
      },
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
        userId: this.userId,
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
      imovelDb.tipo,
      new Endereco(
        imovelDb.enderecoLogradouro,
        imovelDb.enderecoNumero,
        imovelDb.enderecoBairro,
        imovelDb.enderecoComplemento,
        imovelDb.enderecoCidade,
        imovelDb.enderecoEstado,
      ),
    );
  }
}
