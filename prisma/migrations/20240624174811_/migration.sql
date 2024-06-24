/*
  Warnings:

  - You are about to drop the `Contrato` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contrato" DROP CONSTRAINT "Contrato_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Contrato" DROP CONSTRAINT "Contrato_imovelId_fkey";

-- DropTable
DROP TABLE "Contrato";

-- CreateTable
CREATE TABLE "ContratoDeAluguel" (
    "id" TEXT NOT NULL,
    "imovelId" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "diaVencimento" INTEGER NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContratoDeAluguel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContratoDeAluguel" ADD CONSTRAINT "ContratoDeAluguel_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "Imovel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoDeAluguel" ADD CONSTRAINT "ContratoDeAluguel_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
