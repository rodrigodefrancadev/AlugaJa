import { z } from "zod";

export const imovelPropsSchema = z.object({
  proprietarioId: z.string(),
  apelido: z.string().min(1),
  endereco: z.string().min(1),
});

export type ImovelProps = z.infer<typeof imovelPropsSchema>;

export class Imovel implements ImovelProps {
  constructor(
    public readonly id: string,
    public readonly proprietarioId: string,
    public readonly apelido: string,
    public readonly endereco: string,
  ) {}
}
