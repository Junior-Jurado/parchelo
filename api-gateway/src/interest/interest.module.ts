import { Module } from '@nestjs/common';
import { InterestController } from './interest.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';


@Module({
  imports: [ProxyModule],
  controllers: [InterestController],
})
export class InterestModule {}
