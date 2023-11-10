/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Box` table. All the data in the column will be lost.
  - The `status` column on the `Box` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Box_admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Box_admin` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `mail` on the `User` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Authentication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventParticipant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventRessource` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[discord]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[contactEmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "User_role" AS ENUM ('STUDENT', 'ANIMATOR', 'MEDIATOR');

-- CreateEnum
CREATE TYPE "User_promotion" AS ENUM ('ALUMNI', 'DATA1', 'DATA2', 'DATA3', 'H1', 'H2', 'H3', 'H4', 'H5', 'MASTERCTO1', 'MASTERCTO2', 'MASTERCYBERSECURITE1', 'MASTERCYBERSECURITE2', 'MASTERDATA1', 'MASTERDATA2', 'MASTERPM1', 'MASTERPM2', 'MASTERWEBMARKETING1', 'MASTERWEBMARKETING2', 'PREPAMD', 'WEB1', 'WEB2', 'WEB3', 'WEBMARKETING1', 'WEBMARKETING2', 'WEBMARKETING3');

-- CreateEnum
CREATE TYPE "Newsletter_status" AS ENUM ('VISIBLED', 'HIDDEN');

-- CreateEnum
CREATE TYPE "Box_status" AS ENUM ('ACCEPTED', 'PENDING', 'REFUSED', 'STOPPED');

-- CreateEnum
CREATE TYPE "Box_follower_status" AS ENUM ('INTERESTED', 'NOT_INTERESTED');

-- CreateEnum
CREATE TYPE "Event_participant_status" AS ENUM ('PRESENT', 'MAYBE', 'NOT_PRESENT');

-- CreateEnum
CREATE TYPE "Event_room" AS ENUM ('TO_DEFINE', 'AMPHI', 'A001', 'A002', 'A003', 'A004', 'A005', 'A006', 'A007', 'A008', 'A009', 'A010', 'A101', 'A102', 'A103', 'A104', 'A105', 'A106', 'A107', 'A108', 'A109', 'A110', 'A201', 'A202', 'A203', 'A204', 'A205', 'A206', 'A207', 'A208', 'A209', 'A210', 'B001', 'B002', 'B003', 'B004', 'B005', 'B006', 'B007', 'B008', 'B009', 'B010', 'B101', 'B102', 'B103', 'B104', 'B105', 'B106', 'B107', 'B108', 'B109', 'B110', 'B201', 'B202', 'B203', 'B204', 'B205', 'B206', 'B207', 'B208', 'B209', 'B210', 'C001', 'C002', 'C003', 'C004', 'C005', 'C006', 'C007', 'C008', 'C009', 'C010', 'C101', 'C102', 'C103', 'C104', 'C105', 'C106', 'C107', 'C108', 'C109', 'C110', 'C201', 'C202', 'C203', 'C204', 'C205', 'C206', 'C207', 'C208', 'C209', 'C210');

-- CreateEnum
CREATE TYPE "Event_status" AS ENUM ('CANCEL', 'PASS', 'SOON', 'NOW', 'STREAMED');

-- DropForeignKey
ALTER TABLE "Authentication" DROP CONSTRAINT "Authentication_userId_fkey";

-- DropForeignKey
ALTER TABLE "EventParticipant" DROP CONSTRAINT "EventParticipant_eventId_fkey";

-- DropForeignKey
ALTER TABLE "EventParticipant" DROP CONSTRAINT "EventParticipant_userId_fkey";

-- DropForeignKey
ALTER TABLE "EventRessource" DROP CONSTRAINT "EventRessource_eventId_fkey";

-- DropIndex
DROP INDEX "Box_admin_boxId_key";

-- DropIndex
DROP INDEX "User_mail_key";

-- AlterTable
ALTER TABLE "Box" DROP COLUMN "imageUrl",
ADD COLUMN     "image" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" "Box_status" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Box_admin" DROP CONSTRAINT "Box_admin_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Box_admin_pkey" PRIMARY KEY ("boxId", "userId");

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "room" "Event_room",
ADD COLUMN     "startDate" TIMESTAMP(3),
ADD COLUMN     "status" "Event_status" NOT NULL DEFAULT 'SOON';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstname",
DROP COLUMN "lastname",
DROP COLUMN "mail",
ADD COLUMN     "contactEmail" TEXT,
ADD COLUMN     "discord" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "promo" "User_promotion" NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "User_role"[] DEFAULT ARRAY['STUDENT']::"User_role"[];

-- DropTable
DROP TABLE "Authentication";

-- DropTable
DROP TABLE "EventParticipant";

-- DropTable
DROP TABLE "EventRessource";

-- DropEnum
DROP TYPE "BoxStatus";

-- DropEnum
DROP TYPE "ParticipationStatus";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Authentification" (
    "userId" INTEGER NOT NULL,
    "agent" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "tokenStart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tokenEnd" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Authentification_pkey" PRIMARY KEY ("userId","agent")
);

-- CreateTable
CREATE TABLE "Newsletter" (
    "id" SERIAL NOT NULL,
    "writer" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" "Newsletter_status" NOT NULL DEFAULT 'VISIBLED',

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Newsletter_ressource" (
    "id" SERIAL NOT NULL,
    "newsletterId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Newsletter_ressource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event_ressource" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Event_ressource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animator" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT,
    "picture" TEXT,
    "linkedIn" TEXT,
    "discord" TEXT,
    "twitter" TEXT,
    "website" TEXT,

    CONSTRAINT "Animator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Box_follower" (
    "boxId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "Box_follower_status",
    "notified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Box_follower_pkey" PRIMARY KEY ("boxId","userId")
);

-- CreateTable
CREATE TABLE "Event_participant" (
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "status" "Event_participant_status" NOT NULL,

    CONSTRAINT "Event_participant_pkey" PRIMARY KEY ("userId","eventId")
);

-- CreateTable
CREATE TABLE "Event_animator" (
    "animatorId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "Event_animator_pkey" PRIMARY KEY ("animatorId","eventId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Authentification_token_key" ON "Authentification"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Animator_email_key" ON "Animator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Animator_linkedIn_key" ON "Animator"("linkedIn");

-- CreateIndex
CREATE UNIQUE INDEX "Animator_discord_key" ON "Animator"("discord");

-- CreateIndex
CREATE UNIQUE INDEX "Animator_twitter_key" ON "Animator"("twitter");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_discord_key" ON "User"("discord");

-- CreateIndex
CREATE UNIQUE INDEX "User_contactEmail_key" ON "User"("contactEmail");

-- AddForeignKey
ALTER TABLE "Authentification" ADD CONSTRAINT "Authentification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Newsletter" ADD CONSTRAINT "Newsletter_writer_fkey" FOREIGN KEY ("writer") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Newsletter_ressource" ADD CONSTRAINT "Newsletter_ressource_newsletterId_fkey" FOREIGN KEY ("newsletterId") REFERENCES "Newsletter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event_ressource" ADD CONSTRAINT "Event_ressource_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Box_follower" ADD CONSTRAINT "Box_follower_boxId_fkey" FOREIGN KEY ("boxId") REFERENCES "Box"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Box_follower" ADD CONSTRAINT "Box_follower_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event_participant" ADD CONSTRAINT "Event_participant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event_participant" ADD CONSTRAINT "Event_participant_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event_animator" ADD CONSTRAINT "Event_animator_animatorId_fkey" FOREIGN KEY ("animatorId") REFERENCES "Animator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event_animator" ADD CONSTRAINT "Event_animator_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
