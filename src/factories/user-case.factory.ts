import { CadastrarClienteUseCase } from "~/domain/use-cases/cadastrar-cliente.use-case";
import { RepositoryFactory } from "./repository.factory";

export class UseCaseFactory {
  public static cadastrarCliente(userId: string) {
    const repository = RepositoryFactory.cliente(userId);
    return new CadastrarClienteUseCase(repository);
  }
}
