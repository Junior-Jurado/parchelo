import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { IUser } from './user.interface';
import { v4 as uuidv4} from 'uuid';

@Injectable()
export class UserService{
    users: IUser[] = [];
    create(userDTO: UserDTO){
        const user = {
            id: uuidv4(),
            ...userDTO
        };
        this.users.push(user);
        return user;

    }
}
