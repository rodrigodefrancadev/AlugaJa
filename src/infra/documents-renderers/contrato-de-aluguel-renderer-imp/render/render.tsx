import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { ContratoDeAluguelParaImprimirData } from "./types";

regiserFonts();

export const Render: React.FC<{
  contratoDeAluguel: ContratoDeAluguelParaImprimirData;
}> = ({ contratoDeAluguel: { clausulas } }) => {
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
            Francineia Santos de França, brasileira, solteira, empresária,
            portadora da cédula de identidade 54181696-9 – expedida pela SSP/MA,
            inscrito no CPF sob o no 795.193.503-49 e residente na Rua
            Vasconcelos, 03, Araçagy, São José de Ribamar - MA.
          </Text>
        </Text>

        <Text style={styles.clausulaContainer}>
          <Text style={styles.clausulaTitulo}>LOCATÁRIO: </Text>
          <Text style={styles.clausulaTexto}>
            Romário do Nascimento Rocha, brasileiro, solteiro, autônoma,
            portador da cédula de identidade 074911602021-6 expedida pela
            SSP/MA, inscrita no CPF sob o no 038.528.093-98, residente na Rua da
            Carambola, Quadra 16, n 26, Ap 06, Pirâmide, Raposa - MA.
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

        <Text style={styles.texto}>Raposa-MA, 10 de março de 2024.</Text>

        <View style={styles.assinaturaContainer}>
          <View style={styles.assinaturaItemContainer}>
            <Text style={styles.texto}>
              ________________________________________________
            </Text>
            <Text style={styles.texto}>Francineia Santos de França</Text>
            <Text style={styles.texto}>LOCADOR</Text>
          </View>

          <View style={styles.assinaturaItemContainer}>
            <Text style={styles.texto}>
              ________________________________________________
            </Text>
            <Text style={styles.texto}>Romário do Nascimento Rocha</Text>
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
