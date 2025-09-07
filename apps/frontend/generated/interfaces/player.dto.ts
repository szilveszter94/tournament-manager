export interface PlayerDto {
  id: number;
  name: string;
  overallWins: number;
  overallLosses: number;
  group: number | null;
  test: number | null;
  elo: number;
  createdAt: Date;
  updatedAt: Date;
}
