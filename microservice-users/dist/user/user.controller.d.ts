import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDTO: UserDTO): Promise<import("../common/interfaces/user.interface").IUser>;
    findAll(): Promise<import("../common/interfaces/user.interface").IUser[]>;
    findOne(id: String): Promise<import("mongoose").Document<unknown, {}, import("../common/interfaces/user.interface").IUser> & import("../common/interfaces/user.interface").IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    update(payload: any): Promise<import("../common/interfaces/user.interface").IUser>;
    delete(id: String): Promise<{
        status: import("@nestjs/common").HttpStatus;
    }>;
}
