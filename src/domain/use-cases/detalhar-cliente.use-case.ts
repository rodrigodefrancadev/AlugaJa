import { UseCase } from "~/commom/use-case";
import { Cliente } from "../entities/cliente";
import { ClienteRepository } from "../repositories/cliente.repository";

interface Input {
  id: string;
}

export class DetalharClienteUseCase extends UseCase<Input, Cliente> {
  constructor(private readonly clienteRepository: ClienteRepository) {
    super();
  }

  async execute({ id }: Input): Promise<Cliente> {
    const cliente = await this.clienteRepository.detalharClientePorId(id);
    return cliente;
  }
}
