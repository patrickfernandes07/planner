/*
  Warnings:

  - A unique constraint covering the columns `[movementId]` on the table `Expense` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[movementId]` on the table `Income` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movementId` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movementId` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "movementId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Income" ADD COLUMN     "movementId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Movement" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "entityId" INTEGER NOT NULL,
    "accountId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movement_contactId_key" ON "Movement"("contactId");

-- CreateIndex
CREATE UNIQUE INDEX "Movement_entityId_key" ON "Movement"("entityId");

-- CreateIndex
CREATE UNIQUE INDEX "Movement_accountId_key" ON "Movement"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Expense_movementId_key" ON "Expense"("movementId");

-- CreateIndex
CREATE UNIQUE INDEX "Income_movementId_key" ON "Income"("movementId");

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_movementId_fkey" FOREIGN KEY ("movementId") REFERENCES "Movement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_movementId_fkey" FOREIGN KEY ("movementId") REFERENCES "Movement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movement" ADD CONSTRAINT "Movement_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movement" ADD CONSTRAINT "Movement_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movement" ADD CONSTRAINT "Movement_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
