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
    //    return this.userService.create(userDTO);
        return new Promise((resolve, reject)=>{
            setTimeout(()=> reject('Request Error'), 15000);
        });
    }

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    findUser(@Param('id') id: String ){
        return this.userService.findUser(id);
    }

    @Get('findEmail:email')
    findUserByEmail(@Param('email') email: String){
        return this.userService.findUserByEmail(email);
    }

    //#TODO: Se modifica lo que queremos pero se borran los demas atributos
    @Put('update/:email')
    updateUser(@Param('email') email: String, @Body() user: UserDTO){
        return this.userService.updateUser(email, user);
    }

    @Delete(':email')
    deleteUser(@Param('email') email:String){
        return this.userService.deleteUser(email);
    }
}
