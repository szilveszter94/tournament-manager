import { writeFileSync } from 'fs';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function generateSwagger() {
  console.log('Starting Swagger generation');
  const app = await NestFactory.create(AppModule, { logger: false });

  const config = new DocumentBuilder()
    .setTitle('Tournament API')
    .setDescription('API for Tournament management')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const path = join(process.cwd(), 'swagger.json');
  writeFileSync(path, JSON.stringify(document, null, 2));
  console.log('Swagger JSON written to', path);
  await app.close();
}

void generateSwagger();
