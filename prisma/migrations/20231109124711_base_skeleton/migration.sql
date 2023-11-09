/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mail` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'SUPER_ADMIN', 'USER');

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "mail" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "Authentication" (
    "id" SERIAL NOT NULL,
    "token" VARCHAR(256) NOT NULL,
    "token_start" TIMESTAMP,
    "token_end" TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Authentication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Box" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Box_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventParticipants" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "EventParticipants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Box_admin" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Box_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventRessource" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "EventRessource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Authentication_userId_key" ON "Authentication"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_mail_key" ON "User"("mail");

-- AddForeignKey
ALTER TABLE "Authentication" ADD CONSTRAINT "Authentication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
