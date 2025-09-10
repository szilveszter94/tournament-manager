/*
  Warnings:

  - You are about to drop the `PlayerTournament` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."PlayerTournament" DROP CONSTRAINT "PlayerTournament_playerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PlayerTournament" DROP CONSTRAINT "PlayerTournament_tournamentId_fkey";

-- DropTable
DROP TABLE "public"."PlayerTournament";

-- CreateTable
CREATE TABLE "public"."TournamentParticipation" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TournamentParticipation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TournamentParticipation_playerId_idx" ON "public"."TournamentParticipation"("playerId");

-- CreateIndex
CREATE INDEX "TournamentParticipation_tournamentId_idx" ON "public"."TournamentParticipation"("tournamentId");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentParticipation_playerId_tournamentId_key" ON "public"."TournamentParticipation"("playerId", "tournamentId");

-- AddForeignKey
ALTER TABLE "public"."TournamentParticipation" ADD CONSTRAINT "TournamentParticipation_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "public"."Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TournamentParticipation" ADD CONSTRAINT "TournamentParticipation_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "public"."Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
