import { Module } from '@nestjs/common';
import { TypeormConfigService } from './typeorm-config/typeorm-config.service';

@Module({
  providers: [, TypeormConfigService],
  exports: [TypeormConfigService],
})
export class SharedModule {}
