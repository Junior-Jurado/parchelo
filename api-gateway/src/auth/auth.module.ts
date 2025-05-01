import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule, 
    ProxyModule, 
    PassportModule, 
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: {
          audience: config.get('APP_URL'),
          // expiresIn: config.get('EXPIRES_IN'),
        },
      }),
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
