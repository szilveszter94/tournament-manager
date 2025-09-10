import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from './base-response';
import { Player } from '../generated/models/player.entity';

export class PlayerResponse extends BaseResponse {
  @ApiProperty({ type: () => Player, required: false })
  data?: Player;
}

export class PlayersResponse extends BaseResponse {
  @ApiProperty({ type: () => Player, isArray: true, required: false })
  data?: Player[];
}
