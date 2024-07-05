import { UseCase } from "~/commom/use-case";
import { ClienteRepository } from "../repositories/cliente.repository";
import { ImovelRepository } from "../repositories/imovel.repository";
import { ContratoDeAluguelRepository } from "../repositories/contrato-de-aluguel.repository";
import { ProprietarioRepository } from "../repositories/proprietario.repository";
import {
  ContratoDeAluguelRenderer,
  ContratoDeAluguelRendererInput,
  ContratoDeAluguelRendererOutput,
} from "../documents-renderers/contrato-de-aluguel-renderer";

type Input = {
  contratoId: string;
};

type Output = ContratoDeAluguelRendererOutput;

export class GerarContratoParaImprimirUseCase extends UseCase<Input, Output> {
  constructor(
    private readonly clienteRepository: ClienteRepository,
    private readonly imovelRepository: ImovelRepository,
    private readonly proprietarioRepository: ProprietarioRepository,
    private readonly contratoDeAluguelRepository: ContratoDeAluguelRepository,
    private readonly contratoDeAluguelRenderer: ContratoDeAluguelRenderer,
  ) {
    super();
  }

  async execute(input: Input): Promise<Output> {
    const contratoDeAluguel =
      await this.contratoDeAluguelRepository.detalharContratoDeAluguelPorId(
        input.contratoId,
      );
    const locatario = await this.clienteRepository.detalharClientePorId(
      contratoDeAluguel.clienteId,
    );
    const imovel = await this.imovelRepository.detalharImovelPorId(
      contratoDeAluguel.imovelId,
    );
    const locador = await this.proprietarioRepository.detalharProprietarioPorId(
      imovel.proprietarioId,
    );

    const renderInput: ContratoDeAluguelRendererInput = {
      contratoDeAluguel,
      locatario,
      imovel,
      locador,
    };

    const result = await this.contratoDeAluguelRenderer.render(renderInput);

    return result;
  }
}
