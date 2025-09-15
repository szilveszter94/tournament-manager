export interface CreateParticipantDto {
  name: string;
  elo?: number;
  wins?: number;
  losses?: number;
  createdAt?: Date;
}
