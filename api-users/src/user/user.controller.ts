import { Controller, Post, Get, Req, Patch, Delete, Param, Query, Body, RequestTimeoutException, Put, UsePipes, ValidationPipe, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { resolve } from 'path';
import { rejects } from 'assert';
import { FileInterceptor } from '@nestjs/platform-express';
import sharp from 'sharp';

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

    @Post(':userId/upload')
    @UseInterceptors(
        FileInterceptor('file',{
            fileFilter: (req, file, callback) => {
                console.log('File MIME type:', file.mimetype);
                if(!file.mimetype.match(/image\/(jpg|jpeg|png)$/)){
                    return callback(new HttpException('Unsupported file type', HttpStatus.BAD_REQUEST), false);
                }
                callback(null, true);
            },
        }),
    )
    async uploadFile(@Param('userId') userId: String, @UploadedFile() file: Express.Multer.File){
        if(!file){
            throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
        }
        const imageBuffer = file.buffer;
        const mimetype = file.mimetype;
        return this.userService.saveProfilePicture(userId, imageBuffer, mimetype);
    }
}
