/*
  Warnings:

  - Added the required column `garantia` to the `ContratoDeAluguel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContratoDeAluguel" ADD COLUMN     "garantia" INTEGER NOT NULL;
