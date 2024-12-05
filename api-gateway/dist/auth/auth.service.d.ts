import { JwtService } from '@nestjs/jwt';
import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { UserDTO } from 'src/user/dto/user.dto';
export declare class AuthService {
    private readonly clientProxy;
    private readonly jwtService;
    constructor(clientProxy: ClientProxyParchelo, jwtService: JwtService);
    private _clientProxyUser;
    validateUser(email: String, password: String): Promise<any>;
    signIng(user: any): Promise<{
        access_token: string;
    }>;
    signUp(userDTO: UserDTO): Promise<import("rxjs").Observable<any>>;
}
