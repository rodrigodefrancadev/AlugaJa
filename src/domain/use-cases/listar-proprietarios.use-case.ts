import { UseCase } from "~/commom/use-case";
import { Proprietario } from "../entities/proprietario";
import { ProprietarioRepository } from "../repositories/proprietario.repository";

export class ListarProprietariosUseCase extends UseCase<void, Proprietario[]> {
  constructor(private readonly proprietarioRepository: ProprietarioRepository) {
    super();
  }

  async execute(): Promise<Proprietario[]> {
    const propritarios =
      await this.proprietarioRepository.listarProprietarios();
    return propritarios;
  }
}
