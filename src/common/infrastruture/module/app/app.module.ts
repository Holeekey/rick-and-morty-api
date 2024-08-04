import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SeedModule } from 'src/seed/infrastructure/module/seed.module';
import { CommonModule } from '../common/common.module';
import { CharacterModule } from 'src/character/infrastructure/module/character.module';

@Module({
  imports: [ConfigModule.forRoot(), CommonModule, SeedModule, CharacterModule],
})
export class AppModule {}
