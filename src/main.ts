import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import 'reflect-metadata';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/filters/http-exception';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { LoggerService } from './logger/logger.service';
import { logger } from './middleware/logger.middleware';

declare const module: any;
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });

  //middleware
  app.use(helmet());
  app.use(
    cors({
      credentials: true,
      origin: `http://localhost:${process.env.CLIENT_PORT}`,
    }),
  );
  app.use(compression());
  app.useLogger(new LoggerService());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());
  // app.useGlobalPipes(new ValidationPipe());
  app.use(logger);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  const PORT = process.env.PORT || 5000;
  await app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
