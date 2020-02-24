import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/filters/http-exception';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { logger } from './middleware/logger.middleware';

async function bootstrap() {
  dotenv.config({ debug: true });
  const app = await NestFactory.create(AppModule);

  //middleware
  app.use(helmet());
  app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
  app.use(compression());
  app.useGlobalFilters(new HttpExceptionFilter()); // Global scoped filter
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.use(logger);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  const PORT = process.env.PORT || 5000;
  await app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
}
bootstrap();
