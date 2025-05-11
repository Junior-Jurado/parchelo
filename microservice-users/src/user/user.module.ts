import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { CATEGORY, USER, INTEREST } from 'src/common/models/models';
import { CategorySchema } from './schema/category.schema';
import { InterestSchema } from './schema/interest.schema';

@Module({
    imports:[
        MongooseModule.forFeatureAsync([
            {
                name: USER.name,
                useFactory: () => UserSchema.plugin(require('mongoose-autopopulate')),
            }, 
            {
                name: CATEGORY.name,
                useFactory: () => CategorySchema.plugin(require('mongoose-autopopulate')),
            }, 
            {
                name: INTEREST.name,
                useFactory: () => InterestSchema.plugin(require('mongoose-autopopulate'))
            },
        ]), 
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
