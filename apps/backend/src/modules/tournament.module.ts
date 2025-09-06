import { Module } from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';
import { TournamentController } from '../controllers/tournament.controller';
import { PrismaService } from '../services/prisma.service';

@Module({
  controllers: [TournamentController],
  providers: [TournamentService, PrismaService],
  exports: [TournamentService],
})
export class TournamentModule {}
