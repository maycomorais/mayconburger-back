import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.set('trust proxy', 1);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Maycon Burger')
    .setDescription('Aplicação para gestão de Hamburgeria')
    .addTag('users')
    .addTag('products')
    .addTag('status')
    .addTag('tables')
    .addTag('categories')
    .addTag('orders')
    .addTag('favorites')
    .addTag('auth')
    .addBearerAuth()
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
