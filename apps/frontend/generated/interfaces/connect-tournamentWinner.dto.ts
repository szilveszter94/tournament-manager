export interface TournamentWinnerTournamentIdPlaceUniqueInputDto {
  tournamentId: number;
  place: number;
}

export interface ConnectTournamentWinnerDto {
  id?: number;
  tournamentId_place?: TournamentWinnerTournamentIdPlaceUniqueInputDto;
}
