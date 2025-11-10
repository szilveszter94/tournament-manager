export type ParticipantStat = {
  wins: number;
  losses: number;
};

export type MatchOutcome = {
  winnerStats: ParticipantStat;
  loserStats: ParticipantStat;
  winnerElo: number;
  loserElo: number;
  winnerEloChange: number;
  loserEloChange: number;
  eloWon: number;
  eloLost: number;
};
