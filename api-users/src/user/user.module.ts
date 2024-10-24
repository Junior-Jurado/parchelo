import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserScheme } from './scheme/user.scheme';
import { USER } from 'src/common/models/models';

@Module({
    imports:[
        MongooseModule.forFeatureAsync([{
            name: USER.name,
            useFactory: () => {
                return UserScheme;
            },
        },]),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
