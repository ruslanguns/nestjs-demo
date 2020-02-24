import { Module, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { RecipeModule } from './recipe/recipe.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';

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
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule implements OnModuleInit, OnApplicationShutdown {
  onModuleInit() {
    console.log(`[AppModule] has been initialized...`);
  }

  onApplicationShutdown(signal: string) {
    console.log(`[AppModule] received ${signal} to shut down...`);
  }
}
