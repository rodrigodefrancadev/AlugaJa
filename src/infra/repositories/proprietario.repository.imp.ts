import { PrismaClient, Proprietario as ProprietarioDb } from "@prisma/client";
import {
  ProprietarioProps,
  Proprietario,
} from "~/domain/entities/proprietario";
import { ProprietarioRepository } from "~/domain/repositories/proprietario.repository";

export class ProprietarioRepositorioImp implements ProprietarioRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly userId: string,
  ) {}

  async cadastrarProprietario(dados: ProprietarioProps): Promise<Proprietario> {
    const proprietarioDb = await this.prisma.proprietario.create({
      data: { ...dados, userId: this.userId },
    });
    const proprietario = this.proprietarioDbToProprietario(proprietarioDb);
    return proprietario;
  }

  async listarProprietarios(): Promise<Proprietario[]> {
    const proprietariosDb = await this.prisma.proprietario.findMany({
      where: {
        userId: this.userId,
      },
    });
    const proprietarios = proprietariosDb.map((proprietarioDb) =>
      this.proprietarioDbToProprietario(proprietarioDb),
    );
    return proprietarios;
  }

  async detalharProprietarioPorId(id: string): Promise<Proprietario> {
    const proprietarioDb = await this.prisma.proprietario.findUnique({
      where: {
        id,
        userId: this.userId,
      },
    });
    if (!proprietarioDb) {
      throw new Error("Proprietario não encontrado");
    }
    const proprietario = this.proprietarioDbToProprietario(proprietarioDb);
    return proprietario;
  }

  private proprietarioDbToProprietario(
    proprietarioDb: ProprietarioDb,
  ): Proprietario {
    return new Proprietario(
      proprietarioDb.id,
      proprietarioDb.nome,
      proprietarioDb.cpf,
      proprietarioDb.estadoCivil,
      proprietarioDb.profissao,
      proprietarioDb.endereco,
    );
  }
}
