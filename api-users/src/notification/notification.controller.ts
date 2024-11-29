import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Nofications')
@Controller('notification')
export class NotificationController {}
