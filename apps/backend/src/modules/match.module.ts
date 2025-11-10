import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { MatchController } from '../controllers/match.controller';
import { MatchService } from '../services/match.service';

@Module({
  controllers: [MatchController],
  providers: [MatchService, PrismaService],
  exports: [MatchService],
})
export class MatchModule {}
