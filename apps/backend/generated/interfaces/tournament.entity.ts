import { TournamentStat } from "./enums";
import { TournamentWinner } from "./tournamentWinner.entity";
import { TournamentElimination } from "./tournamentElimination.entity";
import { TournamentGroup } from "./tournamentGroup.entity";
import { PlayerTournament } from "./playerTournament.entity";
import { Match } from "./match.entity";

export interface Tournament {
  // @generated from prisma schema
  id: number;
  // @generated from prisma schema
  name: string;
  // @generated from prisma schema
  tournamentStat: TournamentStat;
  // @generated from prisma schema
  isFirstRoundsValid: boolean;
  // @generated from prisma schema
  createdAt: Date;
  // @generated from prisma schema
  updatedAt: Date;
  // @generated from prisma schema
  TournamentWinner?: TournamentWinner[];
  // @generated from prisma schema
  TournamentElimination?: TournamentElimination[];
  // @generated from prisma schema
  TournamentGroup?: TournamentGroup[];
  // @generated from prisma schema
  PlayerTournament?: PlayerTournament[];
  // @generated from prisma schema
  Match?: Match[];
}
