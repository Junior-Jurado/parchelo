import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CATEGORY, INTEREST } from 'src/common/models/models';
import { CategorySchema } from './schema/category.schema';
import { InterestSchema } from './schema/interest.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CATEGORY.name,
        useFactory: () => CategorySchema.plugin(require('mongoose-autopopulate')),
      },
      {
        name: INTEREST.name,
        useFactory: () => InterestSchema.plugin(require('mongoose-autopopulate')),
      }
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
