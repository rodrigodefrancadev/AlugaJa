import { z } from "zod";
import { add } from "date-fns";

export const contratoDeAluguelPropsSchema = z.object({
  imovelId: z.string(),
  clienteId: z.string(),
  dataInicio: z.date(),
  meses: z.number().min(1).max(24).int(),
  valor: z.number().gt(0),
  diaVencimento: z.number().min(1).max(28),
  encargos: z
    .object({
      jurosAoMes: z.number().gte(0),
      multa: z.number().gte(0),
    })
    .nullable(),
  garantia: z.number().gte(0),
  dataAssinatura: z.date(),
});

export type ContratoDeAluguelProps = z.infer<
  typeof contratoDeAluguelPropsSchema
>;

export type EncargosDeContrato = ContratoDeAluguelProps["encargos"];

export class ContratoDeAluguel implements ContratoDeAluguelProps {
  constructor(
    public readonly id: string,
    public readonly imovelId: string,
    public readonly clienteId: string,
    public readonly dataInicio: Date,
    public readonly meses: number,
    public readonly valor: number,
    public readonly diaVencimento: number,
    public readonly encargos: EncargosDeContrato | null,
    public readonly garantia: number,
    public readonly dataAssinatura: Date,
  ) {}

  public get dataFim(): Date {
    return add(this.dataInicio, { months: this.meses });
  }
}
