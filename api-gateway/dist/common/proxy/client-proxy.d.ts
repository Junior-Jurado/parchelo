import { ConfigService } from "@nestjs/config";
import { ClientProxy } from "@nestjs/microservices";
export declare class ClientProxyParchelo {
    private readonly config;
    constructor(config: ConfigService);
    clientProxyUsers(): ClientProxy;
    clientProxyInterests(): ClientProxy;
    clientProxyCategories(): ClientProxy;
    clientProxyLocations(): ClientProxy;
    clientProxyEvents(): ClientProxy;
    clientProxyNotifications(): ClientProxy;
}
