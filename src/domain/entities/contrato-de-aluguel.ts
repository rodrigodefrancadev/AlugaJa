import { z } from "zod";

export const contratoDeAluguelPropsSchema = z.object({
  imovelId: z.string(),
  clienteId: z.string(),
  dataInicio: z.date(),
  meses: z.number().min(1).max(24).int(),
  valor: z.number().gt(0),
  diaVencimento: z.number().min(1).max(28),
});

export type ContratoDeAluguelProps = z.infer<
  typeof contratoDeAluguelPropsSchema
>;

export class ContratoDeAluguel implements ContratoDeAluguelProps {
  constructor(
    public readonly id: string,
    public readonly imovelId: string,
    public readonly clienteId: string,
    public readonly dataInicio: Date,
    public readonly meses: number,
    public readonly valor: number,
    public readonly diaVencimento: number,
  ) {}
}
