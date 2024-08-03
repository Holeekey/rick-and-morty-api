import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/database.connection.service';
import { ConcreteUUIDGenerator } from '../../uuid/concrete.uuid.generator';

@Module({
  providers: [PrismaService, ConcreteUUIDGenerator],
  exports: [PrismaService, ConcreteUUIDGenerator],
})
export class CommonModule {}
