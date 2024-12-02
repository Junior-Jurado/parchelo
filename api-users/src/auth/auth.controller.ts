import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/dto/user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Authentication')
@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signin(@Req() req) {
        try {
            console.log('Incoming request:', req.user); // Verifica si llega el usuario
            console.log('JWT_SECRET:', process.env.JWT_SECRET);
            const token = await this.authService.signIng(req.user);
            console.log('Generated token:', token);
            return token;
        } catch (error) {
            console.error('Signin Error:', error); // Muestra el error en detalle
            throw error; // Deja que Nest maneje el error
        }
    }


    @Post('signup')
    async signUp(@Body() userDTO:UserDTO) {
        return await this.authService.signUp(userDTO);
    }
}
