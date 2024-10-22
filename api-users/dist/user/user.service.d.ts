import { UserDTO } from './dto/user.dto';
import { IUser } from './user.interface';
export declare class UserService {
    users: IUser[];
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
    findAll(): IUser[];
    findUser(id: String): IUser;
    findUserByEmail(email: String): IUser;
    updateUser(email: String, user: UserDTO): UserDTO;
    deleteUser(email: String): String;
}
