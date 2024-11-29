import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './common/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());

  const options = new DocumentBuilder()
  .setTitle('PARCHELO')
  .setDescription('Arma los mejores parches')
  .setVersion('1.0.0')
  .build();
  
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/docs', app,document, {
    swaggerOptions: {
      filter: true,
    },
  });
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
