export interface ProprietarioProps {
  nome: string;
  cpf: string;
  estadoCivil: string;
  profissao: string;
  endereco: string;
}

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
