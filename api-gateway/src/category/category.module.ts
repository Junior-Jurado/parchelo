import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [CategoryController]
})
export class CategoryModule {}
