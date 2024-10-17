import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDTO: UserDTO): {
        name: String;
        last_name: String;
        email: String;
        password: String;
        main_picture_profile: String;
        min_picture_profile: String;
        max_picuture_profile: String;
        description: String;
        birthdate: Date;
        created_at: Date;
        updated_at: Date;
        category: import("./dto/user.dto").Category[];
        id: any;
    };
}
