import { Cliente } from "~/domain/entities/cliente";
import { ContratoDeAluguel } from "~/domain/entities/contrato-de-aluguel";
import { Imovel } from "~/domain/entities/imovel";
import { Proprietario } from "~/domain/entities/proprietario";

export type ContratoDeAluguelRendererInput = {
  contratoDeAluguel: ContratoDeAluguel;
  locador: Proprietario;
  locatario: Cliente;
  imovel: Imovel;
};

export type ContratoDeAluguelRendererOutput = {
  pdfBuffer: Buffer;
};

export interface ContratoDeAluguelRenderer {
  render(
    input: ContratoDeAluguelRendererInput,
  ): Promise<ContratoDeAluguelRendererOutput>;
}
