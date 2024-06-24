import { UseCase } from "~/commom/use-case";
import { Cliente } from "../entities/cliente";
import { ClienteRepository } from "../repositories/cliente.repository";

export class ListarClientesUseCase extends UseCase<void, Cliente[]> {
  constructor(private readonly clienteRepository: ClienteRepository) {
    super();
  }

  async execute(): Promise<Cliente[]> {
    const cliente = await this.clienteRepository.listarClientes();
    return cliente;
  }
}
