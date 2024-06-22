export class ContratoDeAluguel {
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
