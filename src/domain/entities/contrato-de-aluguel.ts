export interface ContratoDeAluguelProps {
  imovelId: string;
  clienteId: string;
  dataInicio: Date;
  dataFim: Date;
  valor: number;
  diaVencimento: number;
}

export class ContratoDeAluguel implements ContratoDeAluguelProps {
  constructor(
    public readonly id: string,
    public readonly imovelId: string,
    public readonly clienteId: string,
    public readonly dataInicio: Date,
    public readonly dataFim: Date,
    public readonly valor: number,
    public readonly diaVencimento: number,
  ) {}
}
