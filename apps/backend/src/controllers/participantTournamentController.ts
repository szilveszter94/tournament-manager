import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiExtraModels,
  ApiOperation,
} from '@nestjs/swagger';
import { ParticipantTournamentsResponse } from '../../custom-models/api/participant-tournament';
import { ParticipantTournamentService } from '..//services/participant-tournament.service';

@ApiTags('participantTournament')
@ApiExtraModels(ParticipantTournamentsResponse)
@Controller('participantTournament')
export class ParticipantTournamentController {
  constructor(
    private readonly participantTournamentService: ParticipantTournamentService,
  ) {}

  // GET Participant by Id
  @Get(':tournamentId')
  @ApiOperation({ summary: 'Get participants by tournamentId' })
  @ApiOkResponse({ type: ParticipantTournamentsResponse, isArray: false })
  findByTournamentId(
    @Param('tournamentId') tournamentId: number,
  ): Promise<ParticipantTournamentsResponse> {
    return this.participantTournamentService.find(+tournamentId);
  }
}
