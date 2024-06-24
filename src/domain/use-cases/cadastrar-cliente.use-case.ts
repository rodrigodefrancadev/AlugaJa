import { UseCase } from "~/commom/use-case";
import { Cliente, ClienteProps } from "../entities/cliente";
import { ClienteRepository } from "../repositories/cliente.repository";

export class CadastrarClienteUseCase extends UseCase<ClienteProps, Cliente> {
  constructor(private readonly clienteRepository: ClienteRepository) {
    super();
  }

  async execute(input: ClienteProps): Promise<Cliente> {
    const cliente = await this.clienteRepository.cadastrarCliente(input);
    return cliente;
  }
}
