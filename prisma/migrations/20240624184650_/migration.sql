/*
  Warnings:

  - A unique constraint covering the columns `[userId,cpf]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,apelido]` on the table `Imovel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,cpf]` on the table `Proprietario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `ContratoDeAluguel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Imovel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Proprietario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ContratoDeAluguel" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Imovel" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Proprietario" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_userId_cpf_key" ON "Cliente"("userId", "cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Imovel_userId_apelido_key" ON "Imovel"("userId", "apelido");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_userId_cpf_key" ON "Proprietario"("userId", "cpf");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proprietario" ADD CONSTRAINT "Proprietario_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoDeAluguel" ADD CONSTRAINT "ContratoDeAluguel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
