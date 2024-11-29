import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from './event/event.module';
import { NotificationModule } from './notification/notification.module';
import { InterestModule } from './interest/interest.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule, 
    ConfigModule.forRoot({
    envFilePath:['.env.development'],
    isGlobal: true,
  }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    EventModule,
    NotificationModule,
    InterestModule,
    CategoryModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
