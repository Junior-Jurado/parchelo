"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const constanst_1 = require("./event/common/constanst");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: process.env.AMQP_URL,
            queue: constanst_1.RabbitMQ.EventQueue,
        },
    });
    await app.listen();
    console.log('Microservice Events is listening');
}
bootstrap();
//# sourceMappingURL=main.js.map