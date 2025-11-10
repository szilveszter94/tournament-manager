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
import {
  GroupStagePhaseDataDto,
  ParticipantIdsDataDto,
  UpdateTournamentAndPhaseDto,
} from '../../custom-models/api/tournament-phase';

@ApiTags('tournamentPhase')
@ApiExtraModels(
  GroupStagePhaseDataDto,
  UpdateTournamentAndPhaseDto,
  ParticipantIdsDataDto,
)
@Controller('tournamentPhase')
export class TournamentPhaseController {
  constructor(
    private readonly tournamentPhaseService: TournamentPhaseService,
  ) {}

  // Add Elimination to the tournament
  @Post('doubleElimination/:tournamentId')
  @ApiOperation({ summary: 'Create double elimination phase for a tournament' })
  @ApiOkResponse({ type: BaseResponse })
  @ApiBody({ type: ParticipantIdsDataDto })
  addDoubleEliminationToTournament(
    @Param('tournamentId') tournamentId: string,
    @Body() entity: ParticipantIdsDataDto,
  ): Promise<BaseResponse> {
    return this.tournamentPhaseService.createDoubleEliminations(
      entity,
      +tournamentId,
    );
  }

  // Add Group Stage Phase to the tournament
  @Post('groupStage/:tournamentId')
  @ApiOperation({ summary: 'Create group stage phase for a tournament' })
  @ApiOkResponse({ type: BaseResponse })
  @ApiBody({ type: GroupStagePhaseDataDto })
  addGrupStageToTournament(
    @Param('tournamentId') tournamentId: string,
    @Body() entity: GroupStagePhaseDataDto,
  ): Promise<BaseResponse> {
    return this.tournamentPhaseService.createGroupStages(entity, +tournamentId);
  }

  // Update Phase and the tournament status
  @Post(':phaseId/:tournamentId')
  @ApiOperation({ summary: 'Update tournamnet phase' })
  @ApiOkResponse({ type: BaseResponse })
  @ApiBody({ type: UpdateTournamentAndPhaseDto })
  updateTournamentPhase(
    @Param('phaseId') phaseId: string,
    @Param('tournamentId') tournamentId: string,
    @Body() entity: UpdateTournamentAndPhaseDto,
  ): Promise<BaseResponse> {
    return this.tournamentPhaseService.updateTournamentPhase(
      entity,
      +tournamentId,
      +phaseId,
    );
  }
}
