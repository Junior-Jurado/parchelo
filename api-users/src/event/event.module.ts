import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { EVENT } from 'src/common/models/models';
import { EventSchema } from './schema/event.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name: EVENT.name,
        useFactory:() => EventSchema,
      }
    ])
  ],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
