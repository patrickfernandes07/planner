/*
  Warnings:

  - You are about to drop the `Expense` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Income` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Movement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `Movement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Movement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_movementId_fkey";

-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_movementId_fkey";

-- AlterTable
ALTER TABLE "Movement" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "payDate" TIMESTAMP(3),
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Expense";

-- DropTable
DROP TABLE "Income";
