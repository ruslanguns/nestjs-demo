import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeormConfigService } from './typeorm-config/typeorm-config.service';

@Module({
  providers: [DatabaseService, TypeormConfigService]
})
export class DatabaseModule {}
