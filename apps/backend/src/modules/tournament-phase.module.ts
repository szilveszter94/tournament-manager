import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { TournamentPhaseController } from '../controllers/tournament-phase.controller';
import { TournamentPhaseService } from '../services/tournament-phase.service';

@Module({
  controllers: [TournamentPhaseController],
  providers: [TournamentPhaseService, PrismaService],
  exports: [TournamentPhaseService],
})
export class TournamentPhaseModule {}
