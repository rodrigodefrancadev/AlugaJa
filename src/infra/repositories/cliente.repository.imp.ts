import { PrismaClient, Cliente as ClienteDb } from "@prisma/client";
import { Cliente, ClienteProps } from "~/domain/entities/cliente";
import { ClienteRepository } from "~/domain/repositories/cliente.repository";

export class ClienteRepositoryImp implements ClienteRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly userId: string,
  ) {}

  async cadastrarCliente(dados: ClienteProps): Promise<Cliente> {
    const clienteDb = await this.prisma.cliente.create({
      data: { ...dados, userId: this.userId },
    });
    const cliente = this.mapClienteDbToCliente(clienteDb);
    return cliente;
  }

  async listarClientes(): Promise<Cliente[]> {
    const clientesDb = await this.prisma.cliente.findMany({
      where: {
        userId: this.userId,
      },
    });
    const clientes = clientesDb.map((clienteDb) =>
      this.mapClienteDbToCliente(clienteDb),
    );
    return clientes;
  }

  async detalharClientePorId(id: string): Promise<Cliente> {
    const clienteDb = await this.prisma.cliente.findUnique({
      where: {
        id,
        userId: this.userId,
      },
    });
    if (!clienteDb) {
      throw new Error("Cliente não encontrado");
    }
    const cliente = this.mapClienteDbToCliente(clienteDb);
    return cliente;
  }

  private mapClienteDbToCliente(clienteDb: ClienteDb): Cliente {
    return new Cliente(
      clienteDb.id,
      clienteDb.nome,
      clienteDb.cpf,
      clienteDb.estadoCivil,
      clienteDb.profissao,
      clienteDb.endereco,
    );
  }
}
