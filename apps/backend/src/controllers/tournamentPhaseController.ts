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
import { GroupStagePhaseDataDto } from '../../custom-models/api/tournament-phase';

@ApiTags('tournamentPhase')
@ApiExtraModels(GroupStagePhaseDataDto)
@Controller('tournamentPhase')
export class TournamentPhaseController {
  constructor(
    private readonly tournamentPhaseService: TournamentPhaseService,
  ) {}

  // Add Phase to the tournament
  @Post('groupStage/:tournamentId')
  @ApiOperation({ summary: 'Create group stage phase for a tournament' })
  @ApiOkResponse({ type: BaseResponse })
  @ApiBody({ type: GroupStagePhaseDataDto })
  addGrupStageToTournament(
    @Param('tournamentId') tournamentId: string,
    @Body() entity: GroupStagePhaseDataDto,
  ): Promise<BaseResponse> {
    return this.tournamentPhaseService.createGroupStage(entity, +tournamentId);
  }
}
