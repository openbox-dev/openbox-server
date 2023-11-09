/*
  Warnings:

  - The values [ADMIN,SUPER_ADMIN,USER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `EventParticipants` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[boxId]` on the table `Box_admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventId]` on the table `EventRessource` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Box` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Box` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Box` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boxId` to the `Box_admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Box_admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boxId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `EventRessource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ressourceUrl` to the `EventRessource` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BoxStatus" AS ENUM ('ACCEPTED', 'REFUSED', 'PENDING');

-- CreateEnum
CREATE TYPE "ParticipationStatus" AS ENUM ('PRESENT', 'INTERESTED', 'NOT_INTERESTED');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ANIMATOR', 'MEDIATOR', 'STUDENT');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'STUDENT';
COMMIT;

-- AlterTable
ALTER TABLE "Box" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "status" "BoxStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Box_admin" ADD COLUMN     "boxId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "boxId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "EventRessource" ADD COLUMN     "eventId" INTEGER NOT NULL,
ADD COLUMN     "ressourceUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'STUDENT';

-- DropTable
DROP TABLE "EventParticipants";

-- CreateTable
CREATE TABLE "EventParticipant" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "status" "ParticipationStatus" NOT NULL,

    CONSTRAINT "EventParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Box_admin_boxId_key" ON "Box_admin"("boxId");

-- CreateIndex
CREATE UNIQUE INDEX "EventRessource_eventId_key" ON "EventRessource"("eventId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_boxId_fkey" FOREIGN KEY ("boxId") REFERENCES "Box"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Box_admin" ADD CONSTRAINT "Box_admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Box_admin" ADD CONSTRAINT "Box_admin_boxId_fkey" FOREIGN KEY ("boxId") REFERENCES "Box"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRessource" ADD CONSTRAINT "EventRessource_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventParticipant" ADD CONSTRAINT "EventParticipant_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventParticipant" ADD CONSTRAINT "EventParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
