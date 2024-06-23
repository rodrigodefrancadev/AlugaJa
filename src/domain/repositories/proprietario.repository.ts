import { ProprietarioProps, Proprietario } from "../entities/proprietario";

export interface ProprietarioRepository {
  cadastrarProprietario(dados: ProprietarioProps): Promise<Proprietario>;
  listarProprietarios(): Promise<Proprietario[]>;
  detalharProprietarioPorId(id: string): Promise<Proprietario>;
}
