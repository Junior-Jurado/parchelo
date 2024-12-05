import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';

@ApiTags('Notifications')
@UseGuards(JwtAuthGuard)
@Controller('notification')
export class NotificationController {}
