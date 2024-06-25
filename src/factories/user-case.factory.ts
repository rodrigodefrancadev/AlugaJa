import { CadastrarClienteUseCase } from "~/domain/use-cases/cadastrar-cliente.use-case";
import { RepositoryFactory } from "./repository.factory";
import { ListarClientesUseCase } from "~/domain/use-cases/listar-clientes.use-case";
import { DetalharClienteUseCase } from "~/domain/use-cases/detalhar-cliente.use-case";
import { CadastrarProprietarioUseCase } from "~/domain/use-cases/cadastrar-proprietario.use-case";
import { ListarProprietariosUseCase } from "~/domain/use-cases/listar-proprietarios.use-case";
import { DetalharProprietarioUseCase } from "~/domain/use-cases/detalhar-proprietario.use-case";
import { CadastrarImovelUseCase } from "~/domain/use-cases/cadastrar-imovel.use-case";
import { DetalharImovelUseCase } from "~/domain/use-cases/detalhar-imovel.use-case";
import { ListarImoveisUseCase } from "~/domain/use-cases/listar-imoveis.use-case";
import { CadastrarContratoDeAluguelUseCase } from "~/domain/use-cases/cadastrar-contrato-de-aluguel.use-case";
import { ListarContratosDeAluguelUseCase } from "~/domain/use-cases/listar-contratos-de-aluguel.use-case";
import { DetalharContratoDeAluguelUseCase } from "~/domain/use-cases/contrato-de-aluguel.use-case";

export class UseCaseFactory {
  public static cadastrarCliente(userId: string) {
    const repository = RepositoryFactory.cliente(userId);
    return new CadastrarClienteUseCase(repository);
  }

  public static listarClientes(userId: string) {
    const repository = RepositoryFactory.cliente(userId);
    return new ListarClientesUseCase(repository);
  }

  public static detalharClientes(userId: string) {
    const repository = RepositoryFactory.cliente(userId);
    return new DetalharClienteUseCase(repository);
  }

  public static cadastrarProprietario(userId: string) {
    const repository = RepositoryFactory.proprietario(userId);
    return new CadastrarProprietarioUseCase(repository);
  }

  public static listarProprietarios(userId: string) {
    const repository = RepositoryFactory.proprietario(userId);
    return new ListarProprietariosUseCase(repository);
  }

  public static detalharProprietario(userId: string) {
    const repository = RepositoryFactory.proprietario(userId);
    return new DetalharProprietarioUseCase(repository);
  }

  public static cadastrarImovel(userId: string) {
    const repository = RepositoryFactory.imovel(userId);
    return new CadastrarImovelUseCase(repository);
  }

  public static listarImoveis(userId: string) {
    const repository = RepositoryFactory.imovel(userId);
    return new ListarImoveisUseCase(repository);
  }

  public static detalharImovel(userId: string) {
    const repository = RepositoryFactory.imovel(userId);
    return new DetalharImovelUseCase(repository);
  }

  public static cadastrarContratoDeAluguel(userId: string) {
    const repository = RepositoryFactory.contratoDeAluguel(userId);
    return new CadastrarContratoDeAluguelUseCase(repository);
  }

  public static listarContratosDeAluguel(userId: string) {
    const repository = RepositoryFactory.contratoDeAluguel(userId);
    return new ListarContratosDeAluguelUseCase(repository);
  }

  public static detalharContratoDeAluguel(userId: string) {
    const repository = RepositoryFactory.contratoDeAluguel(userId);
    return new DetalharContratoDeAluguelUseCase(repository);
  }
}
