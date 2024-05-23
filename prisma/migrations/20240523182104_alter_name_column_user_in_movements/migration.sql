/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Movement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Movement` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Movement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Movement" DROP CONSTRAINT "Movement_ownerId_fkey";

-- DropIndex
DROP INDEX "Movement_ownerId_key";

-- AlterTable
ALTER TABLE "Movement" DROP COLUMN "ownerId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Movement_userId_key" ON "Movement"("userId");

-- AddForeignKey
ALTER TABLE "Movement" ADD CONSTRAINT "Movement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
