export type Clausula = {
  titulo: string;
  texto: string;
};

export type Endereco = {
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
};

export type ParteDoContrato = {
  nome: string;
  cpf: string;
  estadoCivil: string;
  profissao: string;
  endereco: Endereco;
};

export type PartesDoContrato = {
  locador: ParteDoContrato;
  locatario: ParteDoContrato;
};

export type LocalDeAssinatura = {
  cidade: string;
  estado: string;
};

export type ContratoDeAluguelParaImprimirData = {
  partes: PartesDoContrato;
  clausulas: Clausula[];
  localDeAssinatura: LocalDeAssinatura;
  dataDeAssinatura: Date;
};
