import * as cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:3001', 'http://5.188.138.67:3001'],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  await app.listen(3000);
}
bootstrap();
