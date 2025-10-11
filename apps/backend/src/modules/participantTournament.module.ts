import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ParticipantTournamentController } from '..//controllers/participantTournamentController';
import { ParticipantTournamentService } from '../services/participant-tournament.service';

@Module({
  controllers: [ParticipantTournamentController],
  providers: [ParticipantTournamentService, PrismaService],
  exports: [ParticipantTournamentService],
})
export class ParticipantTournamentModule {}
