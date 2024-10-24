import { Controller, Post, Get, Req, Patch, Delete, Param, Query, Body, RequestTimeoutException, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { resolve } from 'path';
import { rejects } from 'assert';

@Controller('/api/v1/user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    create(@Body() userDTO: UserDTO){
        return this.userService.create(userDTO);
    }



    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get('findEmail:email')
    findUserByEmail(@Param('email') email: String){
        return this.userService.findUserByEmail(email);
    }   

    @Put('update/:email')
    updateUser(@Param('email') email: String, @Body() user: UserDTO){
        return this.userService.updateUser(email, user);
    }

    @Delete(':email')
    deleteUser(@Param('email') email:String){
        return this.userService.deleteUser(email);
    }
/*
    @Get(':id')
    findUser(@Param('id') id: String ){
        return this.userService.findUser(id);
    }

   

    //#TODO: Se modifica lo que queremos pero se borran los demas atributos



    */
}
