import { HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { USER } from 'src/common/models/models';
import { Model } from 'mongoose';
import { IUser } from 'src/common/interfaces/user.interface';

@Injectable()
export class UserService{
    constructor(@InjectModel(USER.name) private readonly model: Model<IUser>){

    }

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

    async findOne(id: String){
        return await this.model.findOne(id);
    }

    async update(id: String, user: UserDTO): Promise<IUser> {
        const hash = await this.hashPassword(user.password);
        const userUpdated = {...user, password: hash};
        return await this.model.findOneAndUpdate(id, userUpdated, {new: true})

    }

    async delete(email: String) {
        await this.model.findOneAndDelete(email);
        return {status: HttpStatus.NO_CONTENT};
    }

    async findUserByEmail(email: String){
        return await this.model.findOne({ email });
    }

    async checkPassword(password: String, passwordDB: String): Promise<Boolean> {
        return await bcrypt.compare(password, passwordDB);
    }

}
