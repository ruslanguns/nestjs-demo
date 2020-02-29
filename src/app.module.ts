import {
  CacheModule,
  Module,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { BlogModule } from './blog/blog.module';
import { CategoryModule } from './category/category.module';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { ProductModule } from './product/product.module';
import { RecipeModule } from './recipe/recipe.module';
import { TypeormConfigService } from './services/typeorm-config/typeorm-config.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    RecipeModule,
    DatabaseModule,
    UserModule,
    BlogModule,
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
      context: ({req}) => ({req})
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthService,
    TypeormConfigService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule implements OnModuleInit, OnApplicationShutdown {
  constructor(private readonly cnx: Connection) {}
  onModuleInit() {
    console.log(`[AppModule] has been initialized...`);
  }

  onApplicationShutdown(signal: string) {
    console.log(`[AppModule] received ${signal} to shut down...`);
  }
}
