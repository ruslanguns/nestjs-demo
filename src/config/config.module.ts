import { DynamicModule, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from '../constants';
import { ConfigService } from './config.service';

// THIS PROVIDER (token) WOULD BE REPLACED BY THE useClass SERVICE
/* const configService = {
  provide: ConfigService, 
  useClass: process.env.NODE_ENV === 'development' ? DevConfigService ? ProdConfigService 
} */

@Module({})
export class ConfigModule {
  /** @OPTIONS is a directory path that holds config  */
  static register(options: { [key: string]: string }): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        ConfigService,
        {
          /* This will make it injectable into the ConfigService, */
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
      ],
      exports: [ConfigService],
    };
  }
}
