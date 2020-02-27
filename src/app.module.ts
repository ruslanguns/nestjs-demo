import { Module, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './database/database.module';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { ProductModule } from './product/product.module';
import { RecipeModule } from './recipe/recipe.module';
import { TypeormConfigService } from './services/typeorm-config/typeorm-config.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    RecipeModule,
    AuthModule,
    DatabaseModule,
    UserModule,
    BlogModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfigService,
    }),
    CategoryModule,
    ProductModule,
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
      .then(cn => {
        if (cn) {
          return;
        }
      })
      .catch(err => console.log('[DB Connection Error]: ', err));
  }
  onModuleInit() {
    console.log(`[AppModule] has been initialized...`);
  }

  onApplicationShutdown(signal: string) {
    console.log(`[AppModule] received ${signal} to shut down...`);
  }
}
