import { HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { USER } from 'src/common/models/models';
import { Model } from 'mongoose';
import { IUser } from 'src/common/interfaces/user.interface';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UserService{
    constructor(@InjectModel(USER.name) private readonly model: Model<IUser>){

    }

    async hashPassword(password: String):Promise<String>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    async create(userDTO: UserDTO): Promise<IUser> {
        const existingUser = await this.model.findOne({ email: userDTO.email }).exec();
        if (existingUser) {
            throw new RpcException({ 
                statusCode: HttpStatus.CONFLICT,
                message: 'El correo electrónico ya está registrado.'
            });
        }
    
        const hash = await this.hashPassword(userDTO.password);
        const newUser = new this.model({ ...userDTO, password: hash });
    
        try {
            return await newUser.save();
        } catch (error) {
            // Aquí dejamos que el filtro maneje cualquier error inesperado
            throw error;
        }
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
        const user = await this.model.findOne({ email });

        if(!user) {
            throw new RpcException({ 
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Correo y/o contraseña incorrectas'
            });
        }
        return user;
    }

    async checkPassword(password: String, passwordDB: String): Promise<Boolean> {
        const isPasswordValid = await bcrypt.compare(password, passwordDB);
        if(!isPasswordValid) {
            throw new RpcException({ 
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Correo y/o contraseña incorrectas'
            });
        }
        
        return isPasswordValid;
    }

}
