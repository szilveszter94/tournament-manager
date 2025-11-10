-- CreateEnum
CREATE TYPE "public"."DoubleEliminationBracket" AS ENUM ('Winner', 'Loser', 'Eliminated');

-- CreateEnum
CREATE TYPE "public"."MatchType" AS ENUM ('DoubleElimination', 'Group', 'Knockout', 'Bronze', 'Final');

-- CreateEnum
CREATE TYPE "public"."PhaseType" AS ENUM ('None', 'GroupStage', 'SingleElimination', 'DoubleElimination', 'RoundRobin', 'Swiss');

-- CreateEnum
CREATE TYPE "public"."ParticipantType" AS ENUM ('Individual', 'Team');

-- CreateEnum
CREATE TYPE "public"."TournamentStatus" AS ENUM ('RegisterPlayers', 'GroupStage', 'GroupStageCompleted', 'SingleElimination', 'SingleEliminationCompleted', 'DoubleElimination', 'DoubleEliminationCompleted', 'RoundRobin', 'RoundRobinCompleted', 'Swiss', 'SwissCompleted', 'Over');

-- CreateTable
CREATE TABLE "public"."Match" (
    "id" SERIAL NOT NULL,
    "tournamentPhaseId" INTEGER NOT NULL,
    "knockoutId" INTEGER,
    "tournamentGroupId" INTEGER,
    "tournamentDoubleEliminationId" INTEGER,
    "doubleEliminationRound" INTEGER,
    "participant1Id" INTEGER,
    "participant2Id" INTEGER,
    "winnerId" INTEGER,
    "loserId" INTEGER,
    "nextMatchId" INTEGER,
    "serialNumber" INTEGER,
    "winnerElo" INTEGER,
    "loserElo" INTEGER,
    "eloWon" INTEGER,
    "eloLost" INTEGER,
    "isOver" BOOLEAN NOT NULL DEFAULT false,
    "matchType" "public"."MatchType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Participant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "public"."ParticipantType" NOT NULL,
    "elo" INTEGER NOT NULL DEFAULT 1500,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ParticipantDoubleElimination" (
    "id" SERIAL NOT NULL,
    "tournamentDoubleEliminationId" INTEGER NOT NULL,
    "participantId" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "roundNumber" INTEGER NOT NULL DEFAULT 1,
    "doubleEliminationBracket" "public"."DoubleEliminationBracket" NOT NULL DEFAULT 'Winner',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ParticipantDoubleElimination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ParticipantGroup" (
    "id" SERIAL NOT NULL,
    "tournamentGroupId" INTEGER NOT NULL,
    "participantId" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ParticipantGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ParticipantTournament" (
    "id" SERIAL NOT NULL,
    "participantId" INTEGER NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ParticipantTournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tournament" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "public"."TournamentStatus" NOT NULL DEFAULT 'RegisterPlayers',
    "type" "public"."ParticipantType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TournamentDoubleElimination" (
    "id" SERIAL NOT NULL,
    "tournamentPhaseId" INTEGER NOT NULL,
    "roundNumber" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TournamentDoubleElimination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TournamentGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tournamentPhaseId" INTEGER NOT NULL,
    "groupNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TournamentGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TournamentKnockout" (
    "id" SERIAL NOT NULL,
    "tournamentPhaseId" INTEGER NOT NULL,
    "currentRound" INTEGER NOT NULL DEFAULT 1,
    "isOver" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TournamentKnockout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TournamentPhase" (
    "id" SERIAL NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "phaseType" "public"."PhaseType" NOT NULL,
    "order" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TournamentPhase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TournamentWinner" (
    "id" SERIAL NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "participantId" INTEGER NOT NULL,
    "place" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TournamentWinner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Match_tournamentPhaseId_matchType_idx" ON "public"."Match"("tournamentPhaseId", "matchType");

-- CreateIndex
CREATE INDEX "Match_knockoutId_idx" ON "public"."Match"("knockoutId");

-- CreateIndex
CREATE INDEX "Match_tournamentGroupId_idx" ON "public"."Match"("tournamentGroupId");

-- CreateIndex
CREATE INDEX "Match_participant1Id_idx" ON "public"."Match"("participant1Id");

-- CreateIndex
CREATE INDEX "Match_participant2Id_idx" ON "public"."Match"("participant2Id");

-- CreateIndex
CREATE INDEX "Match_winnerId_idx" ON "public"."Match"("winnerId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_tournamentGroupId_serialNumber_key" ON "public"."Match"("tournamentGroupId", "serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_name_key" ON "public"."Participant"("name");

-- CreateIndex
CREATE INDEX "Participant_name_idx" ON "public"."Participant"("name");

-- CreateIndex
CREATE INDEX "ParticipantDoubleElimination_participantId_idx" ON "public"."ParticipantDoubleElimination"("participantId");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantDoubleElimination_tournamentDoubleEliminationId__key" ON "public"."ParticipantDoubleElimination"("tournamentDoubleEliminationId", "participantId");

-- CreateIndex
CREATE INDEX "ParticipantGroup_participantId_idx" ON "public"."ParticipantGroup"("participantId");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantGroup_tournamentGroupId_participantId_key" ON "public"."ParticipantGroup"("tournamentGroupId", "participantId");

-- CreateIndex
CREATE INDEX "ParticipantTournament_participantId_idx" ON "public"."ParticipantTournament"("participantId");

-- CreateIndex
CREATE INDEX "ParticipantTournament_tournamentId_idx" ON "public"."ParticipantTournament"("tournamentId");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantTournament_participantId_tournamentId_key" ON "public"."ParticipantTournament"("participantId", "tournamentId");

-- CreateIndex
CREATE INDEX "Tournament_name_idx" ON "public"."Tournament"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentDoubleElimination_tournamentPhaseId_key" ON "public"."TournamentDoubleElimination"("tournamentPhaseId");

-- CreateIndex
CREATE INDEX "TournamentDoubleElimination_tournamentPhaseId_idx" ON "public"."TournamentDoubleElimination"("tournamentPhaseId");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentDoubleElimination_tournamentPhaseId_roundNumber_key" ON "public"."TournamentDoubleElimination"("tournamentPhaseId", "roundNumber");

-- CreateIndex
CREATE INDEX "TournamentGroup_tournamentPhaseId_idx" ON "public"."TournamentGroup"("tournamentPhaseId");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentGroup_tournamentPhaseId_groupNumber_key" ON "public"."TournamentGroup"("tournamentPhaseId", "groupNumber");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentKnockout_tournamentPhaseId_key" ON "public"."TournamentKnockout"("tournamentPhaseId");

-- CreateIndex
CREATE INDEX "TournamentKnockout_currentRound_idx" ON "public"."TournamentKnockout"("currentRound");

-- CreateIndex
CREATE INDEX "TournamentWinner_tournamentId_idx" ON "public"."TournamentWinner"("tournamentId");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentWinner_tournamentId_place_key" ON "public"."TournamentWinner"("tournamentId", "place");

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_tournamentPhaseId_fkey" FOREIGN KEY ("tournamentPhaseId") REFERENCES "public"."TournamentPhase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_knockoutId_fkey" FOREIGN KEY ("knockoutId") REFERENCES "public"."TournamentKnockout"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_tournamentGroupId_fkey" FOREIGN KEY ("tournamentGroupId") REFERENCES "public"."TournamentGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_tournamentDoubleEliminationId_fkey" FOREIGN KEY ("tournamentDoubleEliminationId") REFERENCES "public"."TournamentDoubleElimination"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_participant1Id_fkey" FOREIGN KEY ("participant1Id") REFERENCES "public"."Participant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_participant2Id_fkey" FOREIGN KEY ("participant2Id") REFERENCES "public"."Participant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "public"."Participant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_loserId_fkey" FOREIGN KEY ("loserId") REFERENCES "public"."Participant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_nextMatchId_fkey" FOREIGN KEY ("nextMatchId") REFERENCES "public"."Match"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParticipantDoubleElimination" ADD CONSTRAINT "ParticipantDoubleElimination_tournamentDoubleEliminationId_fkey" FOREIGN KEY ("tournamentDoubleEliminationId") REFERENCES "public"."TournamentDoubleElimination"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParticipantDoubleElimination" ADD CONSTRAINT "ParticipantDoubleElimination_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "public"."Participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParticipantGroup" ADD CONSTRAINT "ParticipantGroup_tournamentGroupId_fkey" FOREIGN KEY ("tournamentGroupId") REFERENCES "public"."TournamentGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParticipantGroup" ADD CONSTRAINT "ParticipantGroup_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "public"."Participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParticipantTournament" ADD CONSTRAINT "ParticipantTournament_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "public"."Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParticipantTournament" ADD CONSTRAINT "ParticipantTournament_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "public"."Participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TournamentDoubleElimination" ADD CONSTRAINT "TournamentDoubleElimination_tournamentPhaseId_fkey" FOREIGN KEY ("tournamentPhaseId") REFERENCES "public"."TournamentPhase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TournamentGroup" ADD CONSTRAINT "TournamentGroup_tournamentPhaseId_fkey" FOREIGN KEY ("tournamentPhaseId") REFERENCES "public"."TournamentPhase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TournamentKnockout" ADD CONSTRAINT "TournamentKnockout_tournamentPhaseId_fkey" FOREIGN KEY ("tournamentPhaseId") REFERENCES "public"."TournamentPhase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TournamentPhase" ADD CONSTRAINT "TournamentPhase_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "public"."Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TournamentWinner" ADD CONSTRAINT "TournamentWinner_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "public"."Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TournamentWinner" ADD CONSTRAINT "TournamentWinner_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "public"."Participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
