export interface ImovelProps {
  proprietarioId: string;
  apelido: string;
  endereco: string;
}

export class Imovel implements ImovelProps {
  constructor(
    public readonly id: string,
    public readonly proprietarioId: string,
    public readonly apelido: string,
    public readonly endereco: string,
  ) {}
}
