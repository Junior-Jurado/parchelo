import { Controller, Post, Get, Req, Patch, Delete, Param, Query, Body, RequestTimeoutException, Put, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/api/v1/user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    @ApiOperation({summary: 'Create an User'})
    create(@Body() userDTO: UserDTO){
        return this.userService.create(userDTO);
    }



    @Get()
    @ApiOperation({summary: 'Find All Users'})
    findAll(){
        return this.userService.findAll();
    }

    @Get('findEmail:email')
    @ApiOperation({summary: 'Find an User by email'})
    findUserByEmail(@Param('email') email: String){
        return this.userService.findUserByEmail(email);
    }   

    @Put('update/:email')
    @ApiOperation({summary: 'Update an User by email'})
    updateUser(@Param('email') email: String, @Body() user: UserDTO){
        return this.userService.updateUser(email, user);
    }

    @Delete(':email')
    @ApiOperation({summary: 'Delete an User by email'})
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
