import { HttpStatus } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { Model } from 'mongoose';
import { IUser } from 'src/common/interfaces/user.interface';
export declare class UserService {
    private readonly model;
    constructor(model: Model<IUser>);
    hashPassword(password: String): Promise<String>;
    create(userDTO: UserDTO): Promise<IUser>;
    findAll(): Promise<IUser[]>;
    findOne(id: String): Promise<import("mongoose").Document<unknown, {}, IUser> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    update(id: String, user: UserDTO): Promise<IUser>;
    delete(email: String): Promise<{
        status: HttpStatus;
    }>;
    checkPassword(password: String, passwordDB: String): Promise<Boolean>;
}
