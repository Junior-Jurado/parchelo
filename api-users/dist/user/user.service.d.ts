import { HttpStatus } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { IUser } from '../common/interfaces/user.interface';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly model;
    constructor(model: Model<IUser>);
    users: IUser[];
    hashPassword(password: String): Promise<String>;
    create(userDTO: UserDTO): Promise<IUser>;
    findAll(): Promise<IUser[]>;
    findUserByEmail(email: String): Promise<IUser>;
    updateUser(email: String, user: UserDTO): Promise<IUser>;
    deleteUser(email: String): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}
