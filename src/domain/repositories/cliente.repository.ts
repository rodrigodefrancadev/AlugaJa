import { ClienteProps, Cliente } from "../entities/cliente";

export interface ClienteRepository {
  cadastrarCliente(dados: ClienteProps): Promise<Cliente>;
  listarClientes(): Promise<Cliente[]>;
  detalharClientePorId(id: string): Promise<Cliente>;
}
