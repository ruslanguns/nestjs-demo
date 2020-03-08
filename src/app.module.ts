import {
  CacheModule,
  Module,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import configuration from './config/configuration';
import { LoggerModule } from './logger/logger.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { TypeormConfigService } from './shared/typeorm-config/typeorm-config.service';

@Module({
  imports: [
    CategoryModule,
    ProductModule,
    CacheModule.register({
      ttl: 500, //500 sec
      max: 50, // maximum num of items in cache
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      debug: true,
      playground: true,
      context: ({ req }) => ({ req }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'toor',
      database: 'db_test_101',
      logging: ['error'],
      logger: 'file',
      maxQueryExecutionTime: 1000,
      entityPrefix: 'inv_',
      cache: {
        duration: 30000,
      },
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      subscribers: ['src/database/subscriber/**/*.entity.ts'],
      migrations: ['src/migration/**/*.ts'],
      cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber',
      },
    }),
    /*  TypeOrmModule.forRootAsync({
      useClass: TypeormConfigService,
    }), */
    LoggerModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService, TypeormConfigService],
})
export class AppModule implements OnModuleInit, OnApplicationShutdown {
  onModuleInit() {
    console.log(`[AppModule] has been initialized...`);
  }

  onApplicationShutdown(signal: string) {
    console.log(`[AppModule] received ${signal} to shut down...`);
  }
}
