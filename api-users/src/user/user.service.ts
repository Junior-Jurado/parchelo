import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { IUser } from '../common/interfaces/user.interface';
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

    findAll(): IUser[] {
        return this.users;
    }

    findUser(id: String): IUser {
        return this.users.find((u)=>u.id === id);
    }

    findUserByEmail(email: String): IUser{
        console.log(typeof email);
        return this.users.find((u)=> u.email === email);
    }

    updateUser(email: String, user: UserDTO): UserDTO {
        const newUser = {email, ...user};
        this.users = this.users.map((u)=>(u.email===email? newUser:u));
        return newUser;
    }
    deleteUser(email: String): String {
        this.users = this.users.filter((u)=> u.email !== email);
        return 'User deleted';
    }
}
