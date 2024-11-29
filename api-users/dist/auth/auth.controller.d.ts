import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/dto/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(req: any): Promise<{
        acces_token: string;
    }>;
    signUp(userDTO: UserDTO): Promise<import("../common/interfaces/user.interface").IUser>;
}
