import { Clausula } from "./render/types";

export class ClausulasBuilder {
  public static build(): Clausula[] {
    const clausulas: Clausula[] = [
      {
        titulo: "DO OBJETO",
        texto: `Locação do imóvel residencial situado no endereço Rua da Carambola, Quadra 16, n 26, Condomínio Villages Dourado II, Ap 06, Pirâmide, Raposa - MA.`,
      },
      {
        titulo: "DA DESTINAÇÃO",
        texto: `O imóvel destina-se única e exclusivamente a fins residenciais.`,
      },
      {
        titulo: "DO PRAZO",
        texto: `O prazo de locação será de 04 (quatro) meses, iniciando-se em 10 de março de 2024 terminando em 10 de julho de 2024, independentemente de qualquer aviso, notificação ou interpelação judicial.`,
      },
      {
        titulo: "DO ALUGUEL",
        texto: `O aluguel mensal será de R$ 420,00 (quatrocentos e vinte reais), a vencer pontualmente no dia 20 de cada mês. O pagamento deverá ser feito via boletos bancários em anexo.`,
      },
      {
        titulo: "DAS TAXAS E DESPESAS",
        texto: `Por determinação do artigo 22, da Lei no 8.245/1991, compete ao locador pagar as taxas de administração imobiliária, se houver, e de intermediações, nestas compreendidas as despesas necessárias à aferição da idoneidade do pretendente ou de seu fiador. Além disso, cabe ainda ao locador pagar os impostos e as taxas, e contas de energia e água de acordo com seu consumo.`,
      },
      {
        titulo: "DO REAJUSTE",
        texto: true
          ? `Não haverá reajuste de valores durante a vigência deste contrato.`
          : `O valor do aluguel será reajustado anualmente, tendo como base, os índices previstos e acumulados no período anual do (IGPM ou IGP ou IPC, etc), em caso de falta deste índi-ce, o reajustamento do aluguel terá por base a média da variação dos índices inflacionários do ano corrente ao da execução do aluguel, até o primeiro dia anterior ao pagamento de todos os valores devidos. Ocorrendo alguma mudança no âmbito governamental, todos os valores agregados ao aluguel, bem como o próprio alu-guel, serão revistos pelas partes.`,
      },
      {
        titulo: "DA CONSERVAÇÃO",
        texto: `Ao fim do contrato, imóvel deverá ser devolvido no mesmo estado de conservação, com suas instalações em funcionamento, como recebido no ato de assinatura deste contrato.`,
      },
      {
        titulo: "DA DEVOLUÇÃO",
        texto: `Caso o locatário desejar devolver o imóvel antes do prazo ajustado, pagará uma multa referente ao valor de três aluguéis da data da devolução.`,
      },
      {
        titulo: "DAS OBRAS",
        texto: `O valor das benfeitorias necessárias poderá ser compensado com o valor do aluguel, desde que o montante a ser compensado a cada mês não ultrapasse 50% do valor do aluguel. O mesmo poderá ocorrer em relação às benfeitorias úteis, desde que haja concordância expressa e específica do locador.`,
      },
      {
        titulo: "DA CESSÃO E TRANSFERÊNCIA",
        texto: `O locatário não poderá ceder ou transferir a outros o presente imóvel sem o prévio consentimento do locador.`,
      },
      {
        titulo: "DA VENDA DO IMÓVEL",
        texto: `Na hipótese de venda do imóvel, obriga-se o locatário a permitir visitas, mediante combinação prévia de dia e hora, devendo ser oferecido o imóvel ao locatário previamente.`,
      },
      {
        titulo: "DO ATRASO NO PAGAMENTO",
        texto: `O locatário é obrigado a pagar pontualmente o aluguel e os encargos da locação, legal ou contratualmente exigíveis, no prazo e vencimento estipulado. A multa por mora no cumprimento da obrigação será de 5% do valor da prestação em atraso mais juros de 10% ao mês.`,
      },
      {
        titulo: "DA RESCISÃO",
        texto: `As partes elegem o Foro da cidade de Raposa-MA, para as ações que resultem do presente contrato.`,
      },
      {
        titulo: "DA GARANTIA",
        texto: `Como garantia ao cumprimento da obrigação, deixa o locatário desde já a quantia de R$ 420,00 (quatrocentos e vinte reais), representada pelo primeiro boleto, nos termos do artigo 38, da Lei no 8.245/1991. \n\nPARÁGRAFO ÚNICO: O valor referente ao depósito-caução, ao final da locação, poderá ser levantado pelo locatário, mediante a entrega das chaves e a comprovação do cumprimento de tudo o que ficou estipulado.`,
      },
    ];
    return clausulas;
  }
}
