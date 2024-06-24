import { PrismaClient } from "@prisma/client";
import {
  ContratoDeAluguelProps,
  ContratoDeAluguel as ContratoDeAluguelDb,
  ContratoDeAluguel,
} from "~/domain/entities/contrato-de-aluguel";
import {
  ContratoDeAluguelRepository,
  ListarContratosDeAluguelFiltro,
} from "~/domain/repositories/contrato-de-aluguel.repository";

export class ContratoDeAluguelRepositoryImp
  implements ContratoDeAluguelRepository
{
  constructor(
    private readonly prisma: PrismaClient,
    private readonly userId: string,
  ) {}

  async cadastrarContratoDeAluguel(
    dados: ContratoDeAluguelProps,
  ): Promise<ContratoDeAluguel> {
    const contratoDeAluguelDb = await this.prisma.contratoDeAluguel.create({
      data: { ...dados, userId: this.userId },
    });
    const contratoDeAluguel =
      this.contratoDeAluguelDbToContratoDeAluguel(contratoDeAluguelDb);
    return contratoDeAluguel;
  }

  async listarContratosDeAluguel(
    filtro?: ListarContratosDeAluguelFiltro,
  ): Promise<ContratoDeAluguel[]> {
    const contratosDeAluguelDb = await this.prisma.contratoDeAluguel.findMany({
      where: {
        userId: this.userId,
        imovelId: filtro?.imovelId,
        clienteId: filtro?.clienteId,
      },
    });
    const contratosDeAluguel = contratosDeAluguelDb.map((contratoDeAluguelDb) =>
      this.contratoDeAluguelDbToContratoDeAluguel(contratoDeAluguelDb),
    );
    return contratosDeAluguel;
  }

  async detalharContratoDeAluguelPorId(id: string): Promise<ContratoDeAluguel> {
    const contratoDeAluguelDb = await this.prisma.contratoDeAluguel.findUnique({
      where: {
        id,
        userId: this.userId,
      },
    });
    if (!contratoDeAluguelDb) {
      throw new Error("Contrato de aluguel não encontrado");
    }
    const contratoDeAluguel =
      this.contratoDeAluguelDbToContratoDeAluguel(contratoDeAluguelDb);
    return contratoDeAluguel;
  }

  private contratoDeAluguelDbToContratoDeAluguel(
    contratoDeAluguelDb: ContratoDeAluguelDb,
  ): ContratoDeAluguel {
    return new ContratoDeAluguel(
      contratoDeAluguelDb.id,
      contratoDeAluguelDb.imovelId,
      contratoDeAluguelDb.clienteId,
      contratoDeAluguelDb.dataInicio,
      contratoDeAluguelDb.dataFim,
      contratoDeAluguelDb.valor,
      contratoDeAluguelDb.diaVencimento,
    );
  }
}
