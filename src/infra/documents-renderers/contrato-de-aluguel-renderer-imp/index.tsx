import {
  ContratoDeAluguelRenderer,
  ContratoDeAluguelRendererInput,
  ContratoDeAluguelRendererOutput,
} from "~/domain/documents-renderers/contrato-de-aluguel-renderer";
import { ContratoDeAluguelParaImprimirData as ContratoDeAluguelParaImprimirDados } from "./render/types";
import { renderToBuffer } from "@react-pdf/renderer";
import { Render } from "./render/render";

export class ContratoDeAluguelRendererImp implements ContratoDeAluguelRenderer {
  async render(
    input: ContratoDeAluguelRendererInput,
  ): Promise<ContratoDeAluguelRendererOutput> {
    const dados = this.gerarContratoDeAluguelParaImprimirData(input);
    const pdfBuffer = await renderToBuffer(
      <Render contratoDeAluguel={dados} />,
    );
    return {
      pdfBuffer,
    };
  }

  private gerarContratoDeAluguelParaImprimirData(
    input: ContratoDeAluguelRendererInput,
  ): ContratoDeAluguelParaImprimirDados {
    //TODO
    throw new Error("Method not implemented.");
  }
}
