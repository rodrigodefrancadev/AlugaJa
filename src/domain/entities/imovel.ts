import { z } from "zod";
import { Endereco, enderecoSchema } from "../../commom/value-objects/endereco";

export const imovelPropsSchema = z.object({
  proprietarioId: z.string(),
  apelido: z.string().min(1),
  tipo: z.enum(["RESIDENCIAL", "COMERCIAL"]),
  endereco: enderecoSchema,
});

export type ImovelProps = z.infer<typeof imovelPropsSchema>;
export type TipoDeImovel = ImovelProps["tipo"];
export class Imovel implements ImovelProps {
  constructor(
    public readonly id: string,
    public readonly proprietarioId: string,
    public readonly apelido: string,
    public readonly tipo: TipoDeImovel,
    public readonly endereco: Endereco,
  ) {}
}
