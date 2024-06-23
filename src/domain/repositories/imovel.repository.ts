import { ImovelProps, Imovel } from "../entities/imovel";

export interface ListarImoveisFiltro {
  proprietarioId?: string;
}

export interface ImovelRepository {
  cadastrarImovel(dados: ImovelProps): Promise<Imovel>;
  listarImoveis(filtro?: ListarImoveisFiltro): Promise<Imovel[]>;
  detalharImovelPorId(id: string): Promise<Imovel>;
}
