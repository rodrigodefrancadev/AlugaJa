import { UseCase } from "~/commom/use-case";
import { Proprietario } from "../entities/proprietario";
import { ProprietarioRepository } from "../repositories/proprietario.repository";

interface Input {
  id: string;
}

export class DetalharProprietarioUseCase extends UseCase<Input, Proprietario> {
  constructor(private readonly proprietarioRepository: ProprietarioRepository) {
    super();
  }

  async execute({ id }: Input): Promise<Proprietario> {
    const proprietario =
      await this.proprietarioRepository.detalharProprietarioPorId(id);
    return proprietario;
  }
}
