import { ClienteRepository } from "~/domain/repositories/cliente.repository";
import { ContratoDeAluguelRepository } from "~/domain/repositories/contrato-de-aluguel.repository";
import { ImovelRepository } from "~/domain/repositories/imovel.repository";
import { ProprietarioRepository } from "~/domain/repositories/proprietario.repository";
import { ClienteRepositoryImp } from "~/infra/repositories/cliente.repository.imp";
import { ContratoDeAluguelRepositoryImp } from "~/infra/repositories/contrato-de-aluguel.repository.imp";
import { ImovelRepositoryImp } from "~/infra/repositories/imovel.repository.imp";
import { ProprietarioRepositoryImp } from "~/infra/repositories/proprietario.repository.imp";
import { db } from "~/server/db";

export class RepositoryFactory {
  public static cliente(userId: string): ClienteRepository {
    return new ClienteRepositoryImp(db, userId);
  }

  public static imovel(userId: string): ImovelRepository {
    return new ImovelRepositoryImp(db, userId);
  }

  public static proprietario(userId: string): ProprietarioRepository {
    return new ProprietarioRepositoryImp(db, userId);
  }

  public static contratoDeAluguel(userId: string): ContratoDeAluguelRepository {
    return new ContratoDeAluguelRepositoryImp(db, userId);
  }
}
