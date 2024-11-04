import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CATEGORY } from 'src/common/models/models';
import { CategorySchema } from './schema/category.schema';
import { InterestModule } from 'src/interest/interest.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CATEGORY.name,
        useFactory: () => CategorySchema.plugin(require('mongoose-autopopulate')),
      }
    ]), InterestModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
