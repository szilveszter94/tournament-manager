import { Body, Controller, Param, Post } from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiExtraModels,
  ApiOperation,
} from '@nestjs/swagger';
import { BaseResponse } from '../../custom-models/api/base-response';
import { TournamentDoubleEliminationService } from '../services/tournament-double-elimination.service';

@ApiTags('tournamentDoubleElimination')
@ApiExtraModels()
@Controller('tournamentDoubleElimination')
export class TournamentDoubleEliminationController {
  constructor(
    private readonly doubleEliminationService: TournamentDoubleEliminationService,
  ) {}

  // Update Elimination in the tournament
  @Post('/:tournamentId/update')
  @ApiOperation({ summary: 'Update double elimination phase in a tournament' })
  @ApiOkResponse({ type: BaseResponse })
  updateDoubleElimination(
    @Param('tournamentId') tournamentId: string,
  ): Promise<BaseResponse> {
    return this.doubleEliminationService.updateDoubleElimination(+tournamentId);
  }

  // Update Elimination in the tournament
  @Post('/:tournamentId/finalize')
  @ApiOperation({
    summary: 'Finalize double elimination phase in a tournament',
  })
  @ApiOkResponse({ type: BaseResponse })
  finalizeDoubleElimination(
    @Param('tournamentId') tournamentId: string,
  ): Promise<BaseResponse> {
    return this.doubleEliminationService.finalizeDoubleElimination(
      +tournamentId,
    );
  }
}
