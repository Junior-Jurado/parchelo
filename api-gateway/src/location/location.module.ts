import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [LocationController]
})
export class LocationModule {}
