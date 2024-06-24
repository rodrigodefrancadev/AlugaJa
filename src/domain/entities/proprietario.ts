import { z } from "zod";

export const proprietarioPropsSchema = z.object({
  nome: z.string().min(1),
  cpf: z.string().length(11),
  estadoCivil: z.string().min(1),
  profissao: z.string().min(1),
  endereco: z.string().min(1),
});

export type ProprietarioProps = z.infer<typeof proprietarioPropsSchema>;

export class Proprietario implements ProprietarioProps {
  constructor(
    public readonly id: string,
    public readonly nome: string,
    public readonly cpf: string,
    public readonly estadoCivil: string,
    public readonly profissao: string,
    public readonly endereco: string,
  ) {}
}
