import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/dto/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(req: any): unknown;
    signUp(userDTO: UserDTO): unknown;
}
