import { Body, Controller, Param, Post } from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiExtraModels,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';
import { ParticipantResponse } from '../../custom-models/api/participant';
import { BaseResponse } from '../../custom-models/api/base-response';
import { MatchService } from '../services/match.service';
import { UpdateMatchWinnerDto } from '../../custom-models/api/match';

@ApiTags('match')
@ApiExtraModels(UpdateMatchWinnerDto)
@Controller('participantTournament')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  // Update match by matchId
  @Post(':matchId/:tournamentId')
  @ApiOperation({ summary: 'Update a match by matchId' })
  @ApiOkResponse({ type: BaseResponse })
  @ApiBody({ type: UpdateMatchWinnerDto })
  update(
    @Param('matchId') matchId: string,
    @Param('tournamentId') tournamentId: string,
    @Body() entity: UpdateMatchWinnerDto,
  ): Promise<ParticipantResponse> {
    return this.matchService.update(+matchId, +tournamentId, entity);
  }
}
