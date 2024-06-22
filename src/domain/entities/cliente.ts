export class Cliente {
  constructor(
    public readonly id: string,
    public readonly nome: string,
    public readonly cpf: string,
    public readonly estadoCivil: string,
    public readonly profissao: string,
    public readonly endereco: string,
  ) {}
}
