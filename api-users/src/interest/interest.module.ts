import { Module } from '@nestjs/common';
import { InterestController } from './interest.controller';
import { InterestService } from './interest.service';
import { INTEREST } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { InterestSchema } from './schema/interest.schema';

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
  exports: [InterestService],
})
export class InterestModule {}
