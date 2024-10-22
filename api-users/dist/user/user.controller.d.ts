import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDTO: UserDTO): Promise<unknown>;
    findAll(): import("./user.interface").IUser[];
    findUser(id: String): import("./user.interface").IUser;
    findUserByEmail(email: String): import("./user.interface").IUser;
    updateUser(email: String, user: UserDTO): UserDTO;
    deleteUser(email: String): String;
}
