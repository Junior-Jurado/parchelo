import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [EventController]
})
export class EventModule {}
