import { Module } from '@nestjs/common';
import { TournamentModule } from './modules/tournament.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TournamentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
