import { PhaseType, Tournament, TournamentPhase } from "@/generated/api";

export const getGroupPhase = (tournament: Tournament | null | undefined): TournamentPhase | null => {
  if (!tournament) return null;
  const groupPhases = tournament.phases?.filter((p) => p.phaseType === PhaseType.GROUP_STAGE) ?? [];
  if (groupPhases.length > 1) {
    throw new Error("Tournament has multiple group stage phases — only one is allowed.");
  }

  return groupPhases[0];
};
