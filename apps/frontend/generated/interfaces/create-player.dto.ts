export interface CreatePlayerDto {
  name: string;
  elo?: number;
  wins?: number;
  losses?: number;
  createdAt?: Date;
}
