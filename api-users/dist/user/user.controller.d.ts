import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    img: Express.Multer.File;
    create(userDTO: UserDTO): Promise<import("../common/interfaces/user.interface").IUser>;
    findAll(): Promise<import("../common/interfaces/user.interface").IUser[]>;
    findUserByEmail(email: String): Promise<import("../common/interfaces/user.interface").IUser>;
    updateUser(email: String, user: UserDTO): Promise<import("../common/interfaces/user.interface").IUser>;
    deleteUser(email: String): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
    uploadFile(file: Express.Multer.File): void;
}
