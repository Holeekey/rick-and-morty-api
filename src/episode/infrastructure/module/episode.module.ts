import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/infrastruture/module/common/common.module';
import { EpisodeRepositoryPostgres } from '../repositories/episode.repository';
import { EpisodeStatusRepositoryPostgres } from '../repositories/status.repository';
import { SeasonRepositoryPostgres } from '../repositories/season.repository';
import { FindManyEpisodesController } from '../controllers/find-many/find-many-episodes.controller';

@Module({
  controllers: [FindManyEpisodesController],
  providers: [
    EpisodeRepositoryPostgres,
    EpisodeStatusRepositoryPostgres,
    SeasonRepositoryPostgres,
  ],
  imports: [CommonModule],
})
export class EpisodeModule {}
