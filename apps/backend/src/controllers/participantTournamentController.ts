import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiExtraModels,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';
import { ParticipantTournamentsResponse } from '../../custom-models/api/participant-tournament';
import { ParticipantTournamentService } from '../services/participant-tournament.service';
import {
  AutocompleteParticipantDto,
  ParticipantResponse,
} from '../../custom-models/api/participant';
import { BaseResponse } from '../../custom-models/api/base-response';

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
    @Param('tournamentId') tournamentId: string,
  ): Promise<ParticipantTournamentsResponse> {
    return this.participantTournamentService.find(+tournamentId);
  }

  // Add Participant to tournament
  @Post(':tournamentId')
  @ApiOperation({ summary: 'Create a new participant for a tournament' })
  @ApiOkResponse({ type: ParticipantResponse })
  @ApiBody({ type: AutocompleteParticipantDto })
  addParticipantToTournament(
    @Param('tournamentId') tournamentId: string,
    @Body() entity: AutocompleteParticipantDto,
  ): Promise<ParticipantResponse> {
    return this.participantTournamentService.addParticipantToTournament(
      entity,
      +tournamentId,
    );
  }

  // Add Participant to tournament
  @Delete(':tournamentId/:participantId')
  @ApiOperation({ summary: 'Delete a participant from a tournament' })
  @ApiOkResponse({ type: BaseResponse })
  deleteParticipantFromTournament(
    @Param('participantId') participantId: string,
    @Param('tournamentId') tournamentId: string,
  ): Promise<BaseResponse> {
    return this.participantTournamentService.deleteParticipantFromTournament(
      +participantId,
      +tournamentId,
    );
  }
}
