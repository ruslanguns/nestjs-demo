import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/filters/http-exception';
import { logger } from './middleware/logger.middleware';
import { LoggingInterceptor } from './interceptor/logging.interceptor';

async function bootstrap() {
  dotenv.config({ debug: true });
  const app = await NestFactory.create(AppModule);

  //middleware
  app.use(helmet());
  app.use(cors());
  app.useGlobalFilters(new HttpExceptionFilter()); // Global scoped filter
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.use(logger);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  const PORT = process.env.PORT || 5000;
  await app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
}
bootstrap();
