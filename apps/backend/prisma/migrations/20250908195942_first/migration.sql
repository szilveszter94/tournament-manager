-- CreateEnum
CREATE TYPE "public"."EliminationType" AS ENUM ('Knockout', 'Double');

-- CreateEnum
CREATE TYPE "public"."MatchType" AS ENUM ('Group', 'Knockout', 'DoubleEliminationWinners', 'DoubleEliminationLosers', 'Bronze', 'Final');

-- CreateEnum
CREATE TYPE "public"."TournamentStat" AS ENUM ('Setup', 'FirstRounds', 'NormalEliminations', 'DoubleEliminations', 'Over');

-- CreateTable
CREATE TABLE "public"."Elimination" (
    "id" SERIAL NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "type" "public"."EliminationType" NOT NULL DEFAULT 'Knockout',
    "currentRound" INTEGER NOT NULL DEFAULT 1,
    "isOver" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Elimination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Match" (
    "id" SERIAL NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "eliminationId" INTEGER,
    "tournamentGroupId" INTEGER,
    "player1Id" INTEGER,
    "player2Id" INTEGER,
    "winnerId" INTEGER,
    "nextMatchId" INTEGER,
    "round" INTEGER,
    "serialNumber" INTEGER,
    "isOver" BOOLEAN NOT NULL DEFAULT false,
    "matchType" "public"."MatchType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "elo" INTEGER NOT NULL DEFAULT 1500,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PlayerGroup" (
    "id" SERIAL NOT NULL,
    "tournamentGroupId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "points" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerGroup_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "public"."Tournament" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tournamentStat" "public"."TournamentStat" NOT NULL DEFAULT 'Setup',
    "isFirstRoundsValid" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TournamentGroup" (
    "id" SERIAL NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "groupNumber" INTEGER NOT NULL,
    "isGroupMatchesEnded" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TournamentGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TournamentWinner" (
    "id" SERIAL NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "place" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TournamentWinner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Elimination_tournamentId_key" ON "public"."Elimination"("tournamentId");

-- CreateIndex
CREATE INDEX "Elimination_type_currentRound_idx" ON "public"."Elimination"("type", "currentRound");

-- CreateIndex
CREATE INDEX "Match_tournamentId_matchType_round_idx" ON "public"."Match"("tournamentId", "matchType", "round");

-- CreateIndex
CREATE INDEX "Match_eliminationId_idx" ON "public"."Match"("eliminationId");

-- CreateIndex
CREATE INDEX "Match_tournamentGroupId_idx" ON "public"."Match"("tournamentGroupId");

-- CreateIndex
CREATE INDEX "Match_player1Id_idx" ON "public"."Match"("player1Id");

-- CreateIndex
CREATE INDEX "Match_player2Id_idx" ON "public"."Match"("player2Id");

-- CreateIndex
CREATE INDEX "Match_winnerId_idx" ON "public"."Match"("winnerId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_tournamentId_serialNumber_key" ON "public"."Match"("tournamentId", "serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Player_name_key" ON "public"."Player"("name");

-- CreateIndex
CREATE INDEX "Player_name_idx" ON "public"."Player"("name");

-- CreateIndex
CREATE INDEX "PlayerGroup_playerId_idx" ON "public"."PlayerGroup"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerGroup_tournamentGroupId_playerId_key" ON "public"."PlayerGroup"("tournamentGroupId", "playerId");

-- CreateIndex
CREATE INDEX "PlayerTournament_tournamentId_idx" ON "public"."PlayerTournament"("tournamentId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerTournament_playerId_tournamentId_key" ON "public"."PlayerTournament"("playerId", "tournamentId");

-- CreateIndex
CREATE INDEX "Tournament_name_idx" ON "public"."Tournament"("name");

-- CreateIndex
CREATE INDEX "TournamentGroup_tournamentId_idx" ON "public"."TournamentGroup"("tournamentId");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentGroup_tournamentId_groupNumber_key" ON "public"."TournamentGroup"("tournamentId", "groupNumber");

-- CreateIndex
CREATE INDEX "TournamentWinner_tournamentId_idx" ON "public"."TournamentWinner"("tournamentId");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentWinner_tournamentId_place_key" ON "public"."TournamentWinner"("tournamentId", "place");

-- AddForeignKey
ALTER TABLE "public"."Elimination" ADD CONSTRAINT "Elimination_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "public"."Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "public"."Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_eliminationId_fkey" FOREIGN KEY ("eliminationId") REFERENCES "public"."Elimination"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_tournamentGroupId_fkey" FOREIGN KEY ("tournamentGroupId") REFERENCES "public"."TournamentGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_player1Id_fkey" FOREIGN KEY ("player1Id") REFERENCES "public"."Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_player2Id_fkey" FOREIGN KEY ("player2Id") REFERENCES "public"."Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "public"."Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_nextMatchId_fkey" FOREIGN KEY ("nextMatchId") REFERENCES "public"."Match"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PlayerGroup" ADD CONSTRAINT "PlayerGroup_tournamentGroupId_fkey" FOREIGN KEY ("tournamentGroupId") REFERENCES "public"."TournamentGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PlayerGroup" ADD CONSTRAINT "PlayerGroup_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "public"."Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PlayerTournament" ADD CONSTRAINT "PlayerTournament_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "public"."Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PlayerTournament" ADD CONSTRAINT "PlayerTournament_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "public"."Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TournamentGroup" ADD CONSTRAINT "TournamentGroup_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "public"."Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TournamentWinner" ADD CONSTRAINT "TournamentWinner_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "public"."Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TournamentWinner" ADD CONSTRAINT "TournamentWinner_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "public"."Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
