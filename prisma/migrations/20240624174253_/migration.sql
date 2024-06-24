/*
  Warnings:

  - You are about to drop the column `tipo` on the `Imovel` table. All the data in the column will be lost.
  - Added the required column `diaVencimento` to the `Contrato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contrato" ADD COLUMN     "diaVencimento" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Imovel" DROP COLUMN "tipo";
