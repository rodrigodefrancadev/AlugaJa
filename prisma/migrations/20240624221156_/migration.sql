/*
  Warnings:

  - You are about to drop the column `dataFim` on the `ContratoDeAluguel` table. All the data in the column will be lost.
  - Added the required column `meses` to the `ContratoDeAluguel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContratoDeAluguel" DROP COLUMN "dataFim",
ADD COLUMN     "meses" INTEGER NOT NULL;
