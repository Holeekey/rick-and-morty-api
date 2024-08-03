import { NestFactory } from '@nestjs/core';
import { AppModule } from './common/infrastruture/module/app/app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('Bootstrap');

  const config = new DocumentBuilder()
    .setTitle('Rick and Morty API')
    .setDescription(
      'Character, episodes and appearances of TV Show "Rick and Morty"',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('api');
  await app.listen(process.env.APP_PORT);
  logger.log('App running on port ' + process.env.APP_PORT);
}
bootstrap();
