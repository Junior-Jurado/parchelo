import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';

@ApiTags('Categories')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/category')
export class CategoryController {}
