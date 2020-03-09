import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import 'reflect-metadata';
import { AppModule } from './app.module';
import { LoggerService } from './logger/logger.service';

declare const module: any;

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService,
  });

  app.use(helmet());
  app.use(
    cors({
      credentials: true,
      origin: `http://localhost:${process.env.CLIENT_PORT}`,
    }),
  );
  app.use(compression());
  app.useLogger(new LoggerService());

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  const PORT = process.env.PORT || 5000;
  await app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
}
bootstrap();
