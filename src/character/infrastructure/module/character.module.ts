import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/infrastruture/module/common/common.module';

@Module({
  controllers: [],
  imports: [CommonModule],
})
export class CharacterModule {}
