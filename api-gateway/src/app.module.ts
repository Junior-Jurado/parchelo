import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { InterestModule } from './interest/interest.module';
import { CategoryModule } from './category/category.module';
import { EventModule } from './event/event.module';
import { NotificationModule } from './notification/notification.module';
import { LocationModule } from './location/location.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    UserModule,
    InterestModule,
    CategoryModule,
    EventModule,
    NotificationModule,
    LocationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
