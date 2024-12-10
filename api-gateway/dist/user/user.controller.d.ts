import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';
import { Observable } from 'rxjs';
import { IUser } from 'src/common/interfaces/user.interface';
export declare class UserController {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxyParchelo);
    private _clientProxyUser;
    findAll(): Observable<IUser[]>;
    findOne(id: String): Observable<IUser>;
    update(id: String, userDTO: UserDTO): Observable<IUser>;
    delete(id: String): Observable<any>;
}
