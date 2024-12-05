import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { InterestService } from './interest.service';
import { InterestDTO } from './dto/interest.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InterestMSG } from 'src/common/constanst';


@Controller()
export class InterestController {
    constructor(private readonly interestService: InterestService) {}

    @MessagePattern(InterestMSG.CREATE)
    create(@Payload() interestDTO: InterestDTO) {
        return this.interestService.create(interestDTO);
    }

    @MessagePattern(InterestMSG.FIND_ALL)
    findAll() {
       return this.interestService.findAll(); 
    }

    @MessagePattern(InterestMSG.FIND_ONE)
    findOne(@Payload() id: String) {
        return this.interestService.findOne(id);
    }

    @MessagePattern(InterestMSG.FIND_ONE)
    update(@Payload() payload) {
        return this.interestService.update(payload.id, payload.interestDTO);
    }

    @MessagePattern(InterestMSG.DELETE)
    delete(@Payload() id: String) {
        return this.interestService.delete(id);
    }
}
