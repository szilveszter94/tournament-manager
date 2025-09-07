import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const devUrl = configService.get<number>('DEV_URL');
  const port = configService.get<number>('PORT') ?? 5100;
  const config = new DocumentBuilder()
    .setTitle('Tournament API')
    .setDescription('API for Tournament management')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  writeFileSync(
    join(process.cwd(), '../swagger.json'),
    JSON.stringify(document, null, 2),
  );

  app.enableCors({
    origin: devUrl,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(port);
}
void bootstrap();
