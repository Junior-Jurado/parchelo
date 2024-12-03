import { Module } from "@nestjs/common";
import { ClientProxyParchelo } from "./client-proxy";

@Module({
    providers: [ClientProxyParchelo],
    exports: [ClientProxyParchelo]
})

export class ProxyModule {}