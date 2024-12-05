import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/htpp-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());

  const options = new DocumentBuilder()
  .setTitle('PARCHELO')
  .setDescription('Arma los mejores parches')
  .setVersion('2.0.0')
  .addBearerAuth()
  .build();
  
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/docs', app,document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(process.env.PORT ||3000);
}
bootstrap();
