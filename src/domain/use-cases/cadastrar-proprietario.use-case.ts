import { UseCase } from "~/commom/use-case";
import { Proprietario, ProprietarioProps } from "../entities/proprietario";
import { ProprietarioRepository } from "../repositories/proprietario.repository";

export class CadastrarProprietarioUseCase extends UseCase<
  ProprietarioProps,
  Proprietario
> {
  constructor(private readonly proprietarioRepository: ProprietarioRepository) {
    super();
  }

  async execute(input: ProprietarioProps): Promise<Proprietario> {
    const proprietario =
      await this.proprietarioRepository.cadastrarProprietario(input);
    return proprietario;
  }
}
