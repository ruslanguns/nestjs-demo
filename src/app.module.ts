import { Module, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { RecipeModule } from './recipe/recipe.module';
import { TypeormConfigService } from './services/typeorm-config/typeorm-config.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    RecipeModule,
    AuthModule,
    DatabaseModule,
    UserModule,
    BlogModule,
    ConfigModule.register({ folder: './env' }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'toor',
      database: 'db_test_101',
      synchronize: true,
      logging: ['error'],
      maxQueryExecutionTime: 3600,
      entityPrefix: 'inv_',
      cache: {
        duration: 6000,
      },
      //entities: ['src/**.entity.ts'],
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities:true,
      migrations: ['src/database/migration/**/*.entity.ts'],
      subscribers: ['src/database/subscriber/**/*.entity.ts'],
      cli: {
        entitiesDir: 'src/database/entity',
        migrationsDir: 'src/database/migration',
        subscribersDir: 'src/database/subscriber',
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    TypeormConfigService,
  ],
})
export class AppModule implements OnModuleInit, OnApplicationShutdown {
  constructor(private readonly cnx: Connection) {
    cnx
      .connect()
      .then()
      .catch(err => console.log('[DB Connection Error]: ', err));
  }
  onModuleInit() {
    console.log(`[AppModule] has been initialized...`);
  }

  onApplicationShutdown(signal: string) {
    console.log(`[AppModule] received ${signal} to shut down...`);
  }
}
