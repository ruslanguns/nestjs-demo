import { Module, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    AuthModule,
    ConfigModule.register({ folder: './env' }),
    DatabaseModule,
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      debug:true,
      playground:true,
    })
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
  /*   configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes();
  } */

  onModuleInit() {
    console.log(`[AppModule] has been initialized...`);
  }

  onApplicationShutdown(signal: string) {
    console.log(`[AppModule] received ${signal} to shut down...`);
  }
}
