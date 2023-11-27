/*
  Warnings:

  - The primary key for the `Authentification` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Authentification" DROP CONSTRAINT "Authentification_pkey",
ADD CONSTRAINT "Authentification_pkey" PRIMARY KEY ("token");
