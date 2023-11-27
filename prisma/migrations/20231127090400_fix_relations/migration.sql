/*
  Warnings:

  - The values [CANCEL,PASS] on the enum `Event_status` will be removed. If these variants are still used in the database, this will fail.
  - The values [VISIBLED] on the enum `Newsletter_status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `writer` on the `Newsletter` table. All the data in the column will be lost.
  - Added the required column `writerId` to the `Newsletter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Event_room" ADD VALUE 'ONLINE';

-- AlterEnum
BEGIN;
CREATE TYPE "Event_status_new" AS ENUM ('PENDING', 'CANCELLED', 'PASSED', 'SOON', 'NOW', 'STREAMED');
ALTER TABLE "Event" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Event" ALTER COLUMN "status" TYPE "Event_status_new" USING ("status"::text::"Event_status_new");
ALTER TYPE "Event_status" RENAME TO "Event_status_old";
ALTER TYPE "Event_status_new" RENAME TO "Event_status";
DROP TYPE "Event_status_old";
ALTER TABLE "Event" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Newsletter_status_new" AS ENUM ('VISIBLE', 'HIDDEN');
ALTER TABLE "Newsletter" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Newsletter" ALTER COLUMN "status" TYPE "Newsletter_status_new" USING ("status"::text::"Newsletter_status_new");
ALTER TYPE "Newsletter_status" RENAME TO "Newsletter_status_old";
ALTER TYPE "Newsletter_status_new" RENAME TO "Newsletter_status";
DROP TYPE "Newsletter_status_old";
ALTER TABLE "Newsletter" ALTER COLUMN "status" SET DEFAULT 'VISIBLE';
COMMIT;

-- DropForeignKey
ALTER TABLE "Newsletter" DROP CONSTRAINT "Newsletter_writer_fkey";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "conference_link" TEXT,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Newsletter" DROP COLUMN "writer",
ADD COLUMN     "writerId" INTEGER NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'VISIBLE';

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "writerId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event_feedback" (
    "feedbackId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "Event_feedback_pkey" PRIMARY KEY ("feedbackId","eventId")
);

-- AddForeignKey
ALTER TABLE "Newsletter" ADD CONSTRAINT "Newsletter_writerId_fkey" FOREIGN KEY ("writerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event_feedback" ADD CONSTRAINT "Event_feedback_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "Feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event_feedback" ADD CONSTRAINT "Event_feedback_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
