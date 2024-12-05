import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LOCATION } from 'src/common/models/models';
import { LocationSchema } from './schema/location.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: LOCATION.name,
        useFactory: () => LocationSchema,
      },
    ]),
  ],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule {}
