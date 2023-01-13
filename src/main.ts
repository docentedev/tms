import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };
  const config = new DocumentBuilder()
    .setTitle('TMS example')
    .setDescription('The TMS API description')
    .setVersion('1.0')
    .addTag('drivers')
    .addTag('vehicles')
    .addTag('common')
    .build();
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
