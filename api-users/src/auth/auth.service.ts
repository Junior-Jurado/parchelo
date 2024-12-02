import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(email:String, password:String): Promise<any> {
        const user = await this.userService.findUserByEmail(email);

        const isValidPassword = await this.userService.checkPassword(password, user.password);

        if(user && isValidPassword) return user;

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
        return this.userService.create(userDTO);
    }
}
