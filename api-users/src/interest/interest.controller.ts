import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { InterestService } from './interest.service';
import { InterestDTO } from './dto/interest.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';

@ApiTags('Interests')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/interest')
export class InterestController {
    constructor(private readonly interestService: InterestService) {}

    @Post()
    create(@Body() interestDTO: InterestDTO) {
        return this.interestService.create(interestDTO);
    }

    @Get()
    findAll() {
       return this.interestService.findAll(); 
    }

    @Get(':id')
    findOne(@Param('id') id: String) {
        return this.interestService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: String, @Body() interestDTO: InterestDTO) {
        return this.interestService.update(id, interestDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: String) {
        return this.interestService.delete(id);
    }
}
