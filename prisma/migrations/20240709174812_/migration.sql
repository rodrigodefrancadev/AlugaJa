/*
  Warnings:

  - Added the required column `dataAssinatura` to the `ContratoDeAluguel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContratoDeAluguel" ADD COLUMN     "dataAssinatura" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "encargosJurosAoMes" DOUBLE PRECISION,
ADD COLUMN     "encargosMulta" DOUBLE PRECISION;
