/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Authentification` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Authentification_userId_key" ON "Authentification"("userId");
