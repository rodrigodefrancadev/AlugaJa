import { CadastrarClienteUseCase } from "~/domain/use-cases/cadastrar-cliente.use-case";
import { RepositoryFactory } from "./repository.factory";
import { ListarClientesUseCase } from "~/domain/use-cases/listar-clientes.use-case";

export class UseCaseFactory {
  public static cadastrarCliente(userId: string) {
    const repository = RepositoryFactory.cliente(userId);
    return new CadastrarClienteUseCase(repository);
  }

  public static listarClientes(userId: string) {
    const repository = RepositoryFactory.cliente(userId);
    return new ListarClientesUseCase(repository);
  }
}
