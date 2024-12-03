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
        const token = await this.authService.signIng(req.user);
        return token;
    }


    @Post('signup')
    async signUp(@Body() userDTO:UserDTO) {
        return await this.authService.signUp(userDTO);
    }
}
