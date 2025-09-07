import { ApiProperty } from '@nestjs/swagger';
import { Tournament } from '../generated/models/tournament.entity';

export class TournamentResponse {
  @ApiProperty()
  ok: boolean;

  @ApiProperty({ required: false })
  error?: string;

  @ApiProperty({ type: () => Tournament, required: false })
  data?: Tournament;
}
