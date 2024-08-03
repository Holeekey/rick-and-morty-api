import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SeedModule } from 'src/seed/infrastructure/module/seed.module';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [ConfigModule.forRoot(), SeedModule, CommonModule],
})
export class AppModule {}
