import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './schema/event.schema';
import { EVENT, LOCATION, USER } from './common/models/models';
import { UserSchema } from './schema/user.schema';
import { LocationSchema } from './schema/location.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name: EVENT.name,
        useFactory:() => EventSchema,
      },
      {
        name: USER.name,
        useFactory:() => UserSchema,
      },
      {
        name: LOCATION.name,
        useFactory:() => LocationSchema.plugin(require('mongoose-autopopulate')),
      },
    ])
  ],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
