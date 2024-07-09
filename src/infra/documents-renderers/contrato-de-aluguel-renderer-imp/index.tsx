import {
  ContratoDeAluguelRenderer,
  ContratoDeAluguelRendererInput,
  ContratoDeAluguelRendererOutput,
} from "~/domain/documents-renderers/contrato-de-aluguel-renderer";
import { renderToBuffer } from "@react-pdf/renderer";
import { Render } from "./render";

export class ContratoDeAluguelRendererImp implements ContratoDeAluguelRenderer {
  async render(
    input: ContratoDeAluguelRendererInput,
  ): Promise<ContratoDeAluguelRendererOutput> {
    const pdfBuffer = await renderToBuffer(<Render input={input} />);
    return {
      pdfBuffer,
    };
  }
}
