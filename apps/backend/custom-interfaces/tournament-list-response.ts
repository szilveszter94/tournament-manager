import { ApiProperty } from '@nestjs/swagger';
import { Tournament } from '../generated/models/tournament.entity';

export class TournamentListResponse {
  @ApiProperty()
  ok: boolean;

  @ApiProperty({ required: false })
  error?: string;

  @ApiProperty({ type: () => Tournament, isArray: true, required: false })
  data?: Tournament[];
}
