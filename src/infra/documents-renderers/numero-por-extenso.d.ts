declare module "numero-por-extenso" {
  export const estilos = {
    normal: "normal",
    monetario: "monetario",
    porcentagem: "porcentagem",
  } as const;
  export function porExtenso(
    numero: number,
    estilo: keyof typeof estilos = estilos.normal,
  ): string;
}
