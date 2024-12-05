import { Observable } from 'rxjs';
import { IInterest } from 'src/common/interfaces/interest.interface';
import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { InterestDTO } from './dto/interest.dto';
export declare class InterestController {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxyParchelo);
    private _clientProxyInterest;
    create(interestDTO: InterestDTO): Observable<IInterest>;
    findAll(): Observable<IInterest[]>;
    findOne(id: String): Observable<IInterest>;
    update(id: String, interestDTO: InterestDTO): Observable<IInterest>;
    delete(id: String): Observable<any>;
}
