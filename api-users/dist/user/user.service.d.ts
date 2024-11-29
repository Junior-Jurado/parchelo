import { HttpStatus } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { IUser } from '../common/interfaces/user.interface';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly model;
    constructor(model: Model<IUser>);
    hashPassword(password: String): Promise<String>;
    create(userDTO: UserDTO): Promise<IUser>;
    findAll(): Promise<IUser[]>;
    findUserByEmail(email: String): Promise<import("mongoose").Document<unknown, {}, IUser> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    updateUser(email: String, user: UserDTO): Promise<IUser>;
    deleteUser(email: String): Promise<{
        status: HttpStatus;
    }>;
    checkPassword(password: String, passwordDB: String): Promise<Boolean>;
}
