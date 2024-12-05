import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';

@ApiTags('Locations')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/location')
export class LocationController {}
