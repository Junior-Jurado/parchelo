import { HttpStatus } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDTO: UserDTO): Promise<import("../common/interfaces/user.interface").IUser>;
    findAll(): Promise<import("../common/interfaces/user.interface").IUser[]>;
    findUserByEmail(email: String): Promise<import("../common/interfaces/user.interface").IUser>;
    updateUser(email: String, user: UserDTO): Promise<import("../common/interfaces/user.interface").IUser>;
    deleteUser(email: String): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
    uploadFile(userId: String, file: Express.Multer.File): Promise<import("../common/interfaces/user.interface").IUser>;
}
