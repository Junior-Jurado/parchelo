import { Controller } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMSG } from 'src/common/constanst';


@Controller()
export class UserController {
    constructor(private readonly userService: UserService){}

    @MessagePattern(UserMSG.CREATE)
    create(@Payload() userDTO: UserDTO){
        return this.userService.create(userDTO);
    }

    @MessagePattern(UserMSG.FIND_ALL)
    findAll(){
        return this.userService.findAll();
    }

    @MessagePattern(UserMSG.FIND_ONE)
    findOne(@Payload() id: String){
        return this.userService.findOne(id);
    }
    
    @MessagePattern(UserMSG.FIND_BY_EMAIL)
    findByEmail(@Payload() email: string) {
        return this.userService.findUserByEmail(email);
    }

    @MessagePattern(UserMSG.UPDATE)
    update(@Payload() payload: any){
        return this.userService.update(payload.id, payload.userDTO);
    }

    @MessagePattern(UserMSG.DELETE)
    delete(@Payload() id: String){
        return this.userService.delete(id);
    }


    @MessagePattern(UserMSG.VALID_USER)
    async validateUser(@Payload() payload): Promise<any> {
        const user = await this.userService.findUserByEmail(payload.email);

        const isValidPassword = await this.userService.checkPassword(payload.password, user.password);

        if(user && isValidPassword) return user;

        return null;
    }

    @MessagePattern(UserMSG.ADD_CATEGORY_INTEREST)
    async addInterests(@Payload() payload) {
        return this.userService.addInterests(payload.userId, payload.interests);
    }

/*
    @Get(':id')
    findUser(@Param('id') id: String ){
        return this.userService.findUser(id);
    }

   

    //#TODO: Se modifica lo que queremos pero se borran los demas atributos



    */
}
