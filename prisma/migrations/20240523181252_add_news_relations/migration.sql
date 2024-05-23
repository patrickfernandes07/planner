/*
  Warnings:

  - A unique constraint covering the columns `[entityId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[entityId]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[entityId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `entityId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entityId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entityId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "entityId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "entityId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "entityId" INTEGER NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Account_entityId_key" ON "Account"("entityId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_entityId_key" ON "Contact"("entityId");

-- CreateIndex
CREATE UNIQUE INDEX "User_entityId_key" ON "User"("entityId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
