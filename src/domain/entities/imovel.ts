export class Imovel {
  constructor(
    public readonly id: string,
    public readonly proprietarioId: string,
    public readonly apelido: string,
    public readonly endereco: string,
  ) {}
}
