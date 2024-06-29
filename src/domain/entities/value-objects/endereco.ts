import { z } from "zod";

export const enderecoSchema = z.object({
  logradouro: z.string().min(1),
  numero: z.string(),
  bairro: z.string().min(1),
  complemento: z.string(),
  cidade: z.string().min(1),
  estado: z.string().length(2),
});

export type EnderecoProps = z.infer<typeof enderecoSchema>;

export class Endereco implements EnderecoProps {
  constructor(
    public readonly logradouro: string,
    public readonly numero: string,
    public readonly bairro: string,
    public readonly complemento: string,
    public readonly cidade: string,
    public readonly estado: string,
  ) {}
}
