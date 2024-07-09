import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { ClausulasBuilder } from "./clausulas-builder";
import { ContratoDeAluguelRendererInput } from "~/domain/documents-renderers/contrato-de-aluguel-renderer";
import { ddmmyyyy } from "~/commom/helpers/ddmmyyyy";

regiserFonts();

export const Render: React.FC<{ input: ContratoDeAluguelRendererInput }> = ({
  input,
}) => {
  const { locador, locatario, imovel } = input;
  const clausulas = ClausulasBuilder.build(input);
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.titulo}>CONTRATO DE LOCAÇÃO</Text>
        <Text style={styles.texto}>
          Instrumento particular de Contrato de Locação de imóvel que fazem
          entre si:
        </Text>

        <Text style={styles.clausulaContainer}>
          <Text style={styles.clausulaTitulo}>LOCADOR: </Text>

          <Text style={styles.clausulaTexto}>
            {locador.nome}, brasileiro(a), {locador.estadoCivil},{" "}
            {locador.profissao}, inscrito no CPF sob o número {locador.cpf} e
            residente no endereço {locador.endereco.toString()}
          </Text>
        </Text>

        <Text style={styles.clausulaContainer}>
          <Text style={styles.clausulaTitulo}>LOCATÁRIO: </Text>
          <Text style={styles.clausulaTexto}>
            {locatario.nome}, brasileiro(a), {locatario.estadoCivil},{" "}
            {locatario.profissao}, inscrito no CPF sob o número {locatario.cpf}{" "}
            e residente no endereço {locatario.endereco.toString()}
          </Text>
        </Text>

        <Text style={styles.texto}>CLÁUSULAS E CONDIÇÕES</Text>

        {clausulas.map((clausula, index) => (
          <Text key={index} style={styles.clausulaContainer}>
            <Text style={styles.clausulaTitulo}>
              {index + 1}° - {clausula.titulo}:{" "}
            </Text>
            <Text style={styles.clausulaTexto}>{clausula.texto}</Text>
          </Text>
        ))}

        <Text style={styles.texto}>
          Por estarem assim justos e acordados, assinam o presente em 2 (duas)
          vias de igual teor e forma, na presença das testemunhas.
        </Text>

        <Text style={styles.texto}>
          {imovel.endereco.cidade}-{imovel.endereco.estado},{" "}
          {ddmmyyyy(input.contratoDeAluguel.dataAssinatura)}
        </Text>

        <View style={styles.assinaturaContainer}>
          <View style={styles.assinaturaItemContainer}>
            <Text style={styles.texto}>
              ________________________________________________
            </Text>
            <Text style={styles.texto}>{locador.nome}</Text>
            <Text style={styles.texto}>LOCADOR</Text>
          </View>

          <View style={styles.assinaturaItemContainer}>
            <Text style={styles.texto}>
              ________________________________________________
            </Text>
            <Text style={styles.texto}>{locatario.nome}</Text>
            <Text style={styles.texto}>LOCATÁRIO</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

function regiserFonts() {
  Font.register({
    family: "Roboto",
    fonts: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
        fontWeight: 300,
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
        fontWeight: 400,
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
        fontWeight: 500,
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
        fontWeight: 600,
      },
    ],
  });
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 10,
    fontFamily: "Roboto",
  },
  titulo: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  clausulaContainer: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: "justify",
  },
  clausulaTitulo: {},
  clausulaTexto: {},
  texto: {
    fontSize: 12,
    textAlign: "justify",
    marginBottom: 10,
  },
  assinaturaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  assinaturaItemContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});
