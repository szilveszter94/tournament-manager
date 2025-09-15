export interface ParticipantDto {
  id: number;
  name: string;
  elo: number;
  wins: number;
  losses: number;
  createdAt: Date;
  updatedAt: Date;
}
