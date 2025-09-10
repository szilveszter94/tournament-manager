/*
  Warnings:

  - Added the required column `tournamentId` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Player" ADD COLUMN     "tournamentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Player" ADD CONSTRAINT "Player_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "public"."Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;
