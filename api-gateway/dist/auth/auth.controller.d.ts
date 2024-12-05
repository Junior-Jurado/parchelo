import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/dto/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(req: any): Promise<{
        access_token: string;
    }>;
    signUp(userDTO: UserDTO): Promise<import("rxjs").Observable<any>>;
}
