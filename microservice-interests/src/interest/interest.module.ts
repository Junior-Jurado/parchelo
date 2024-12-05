import { Module } from '@nestjs/common';
import { InterestController } from './interest.controller';
import { InterestService } from './interest.service';

import { MongooseModule } from '@nestjs/mongoose';
import { InterestSchema } from './schema/interest.schema';
import { INTEREST } from 'src/common/models/models';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: INTEREST.name,
        useFactory: () => InterestSchema,
      }
    ])
  ],
  controllers: [InterestController],
  providers: [InterestService],
})
export class InterestModule {}
