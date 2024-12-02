"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./common/http-exception.filter");
const timeout_interceptor_1 = require("./common/interceptors/timeout.interceptor");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.AllExceptionFilter());
    app.useGlobalInterceptors(new timeout_interceptor_1.TimeOutInterceptor());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('PARCHELO')
        .setDescription('Arma los mejores parches')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/api/docs', app, document, {
        swaggerOptions: {
            filter: true,
        },
    });
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map