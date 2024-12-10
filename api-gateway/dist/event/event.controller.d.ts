import { Observable } from 'rxjs';
import { IEvent } from 'src/common/interfaces/event.interface';
import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { EventDTO } from './dto/event.dto';
export declare class EventController {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxyParchelo);
    private _clientProxyEvent;
    private _clientProxyUser;
    create(eventDTO: EventDTO): Observable<IEvent>;
    findAll(): Observable<IEvent[]>;
    findOne(id: string): Observable<IEvent>;
    update(id: string, eventDTO: EventDTO): Observable<IEvent>;
    delete(id: string): Observable<any>;
    addAttendee(eventID: string, userID: string): unknown;
}
