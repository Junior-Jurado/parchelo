import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDTO: UserDTO): Promise<import("../common/interfaces/user.interface").IUser>;
    findAll(): Promise<import("../common/interfaces/user.interface").IUser[]>;
    findUserByEmail(email: String): Promise<import("mongoose").Document<unknown, {}, import("../common/interfaces/user.interface").IUser> & import("../common/interfaces/user.interface").IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    updateUser(email: String, user: UserDTO): Promise<import("../common/interfaces/user.interface").IUser>;
    deleteUser(email: String): Promise<{
        status: import("@nestjs/common").HttpStatus;
    }>;
}
