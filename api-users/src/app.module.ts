import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from './event/event.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    UserModule, 
    ConfigModule.forRoot({
    envFilePath:['.env.development'],
    isGlobal: true,
  }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    EventModule,
    NotificationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
