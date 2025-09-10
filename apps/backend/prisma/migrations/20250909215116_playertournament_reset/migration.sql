/*
  Warnings:

  - You are about to drop the column `tournamentId` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the `TournamentParticipation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Player" DROP CONSTRAINT "Player_tournamentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TournamentParticipation" DROP CONSTRAINT "TournamentParticipation_playerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TournamentParticipation" DROP CONSTRAINT "TournamentParticipation_tournamentId_fkey";

-- AlterTable
ALTER TABLE "public"."Player" DROP COLUMN "tournamentId";

-- DropTable
DROP TABLE "public"."TournamentParticipation";

-- CreateTable
CREATE TABLE "public"."PlayerTournament" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerTournament_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PlayerTournament_playerId_idx" ON "public"."PlayerTournament"("playerId");

-- CreateIndex
CREATE INDEX "PlayerTournament_tournamentId_idx" ON "public"."PlayerTournament"("tournamentId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerTournament_playerId_tournamentId_key" ON "public"."PlayerTournament"("playerId", "tournamentId");

-- AddForeignKey
ALTER TABLE "public"."PlayerTournament" ADD CONSTRAINT "PlayerTournament_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "public"."Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PlayerTournament" ADD CONSTRAINT "PlayerTournament_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "public"."Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
