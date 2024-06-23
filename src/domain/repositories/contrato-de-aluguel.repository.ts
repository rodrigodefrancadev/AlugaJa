import {
  ContratoDeAluguel,
  ContratoDeAluguelProps,
} from "../entities/contrato-de-aluguel";

export interface ListarContratosDeAluguelFiltro {
  imovelId?: string;
  clienteId?: string;
}

export interface ContratoDeAluguelRepository {
  cadastrarContratoDeAluguel(
    dados: ContratoDeAluguelProps,
  ): Promise<ContratoDeAluguel>;
  listarContratosDeAluguel(
    filtro?: ListarContratosDeAluguelFiltro,
  ): Promise<ContratoDeAluguel[]>;
  detalharContratoDeAluguelPorId(id: string): Promise<ContratoDeAluguel>;
}
