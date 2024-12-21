import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { IUser } from '../common/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4} from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { USER } from 'src/common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class UserService{
    constructor(@InjectModel(USER.name) private readonly model: Model<IUser>){}

    users: IUser[] = [];

    async hashPassword(password: String):Promise<String>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    async create(userDTO: UserDTO): Promise<IUser>{
        const hash = await this.hashPassword(userDTO.password);
        const newUser = new this.model({...userDTO, password: hash});
        return await newUser.save();
    }

    async findAll(): Promise<IUser[]>{
        return await this.model.find();
    }

    async findUserByEmail(email: String): Promise<IUser>{
        return this.model.findOne({email: email});
    }

    async updateUser(email: String, user: UserDTO): Promise<IUser> {
        const hash = await this.hashPassword(user.password);
        const userUpdated = {...user, password: hash};
        return await this.model.findOneAndUpdate({email: email}, user, {new: true})

    }

    async deleteUser(email: String) {
        await this.model.findOneAndDelete(email);
        return {status: HttpStatus.OK, msg:'User Deleted'};
    }

    async saveProfilePicture(userId: String,imageBuffer: Buffer, mimetype: string): Promise<IUser> {
        const user = await this.model.findById(userId);
        if(!user){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        const base64Image = `data:${mimetype};base64,${imageBuffer.toString('base64')}`;
        user.main_picture_profile = base64Image;
        return user.save();
    }


}
