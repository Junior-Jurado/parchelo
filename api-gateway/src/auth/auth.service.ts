import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserMSG } from 'src/common/constanst';
import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { UserDTO } from 'src/user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly clientProxy: ClientProxyParchelo,
        private readonly jwtService: JwtService
    ) {}

    private _clientProxyUser = this.clientProxy.clientProxyUsers();

    async validateUser(email:String, password:String): Promise<any> {
        const user = await this._clientProxyUser.send(UserMSG.VALID_USER, { email, password }).toPromise();

        if(user) return user;

        return null;
    }
    
    async signIng(user:any) {
        const payload = {
            
            email: user.email,
            sub: user._id,
        };
        console.log('Validating user', user.email);
        console.log('Payload:', payload);


        return { access_token: this.jwtService.sign(payload) };
    }

    async signUp(userDTO: UserDTO) {
        return await this._clientProxyUser.send(UserMSG.CREATE, userDTO);
    }
}
