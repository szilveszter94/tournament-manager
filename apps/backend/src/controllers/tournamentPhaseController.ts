import { Body, Controller, Param, Post } from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiExtraModels,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';
import { TournamentPhaseService } from '../services/tournament-phase.service';
import { BaseResponse } from '../../custom-models/api/base-response';
import { TournamentPhaseDataDto } from '../../custom-models/api/tournament-phase';

@ApiTags('tournamentPhase')
@ApiExtraModels(TournamentPhaseDataDto)
@Controller('tournamentPhase')
export class TournamentPhaseController {
  constructor(
    private readonly tournamentPhaseService: TournamentPhaseService,
  ) {}

  // Add Phase to the tournament
  @Post(':tournamentId')
  @ApiOperation({ summary: 'Create a new phase for a tournament' })
  @ApiOkResponse({ type: BaseResponse })
  @ApiBody({ type: TournamentPhaseDataDto })
  addPhaseToTournament(
    @Param('tournamentId') tournamentId: string,
    @Body() entity: TournamentPhaseDataDto,
  ): Promise<BaseResponse> {
    return this.tournamentPhaseService.createGroupStage(entity, +tournamentId);
  }
}
