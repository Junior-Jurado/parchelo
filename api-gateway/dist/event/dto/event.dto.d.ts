import { Types } from "mongoose";
import { LocationDTO } from "src/location/dto/location.dto";
export declare class WhatsAppGroupDTO {
    readonly link: string;
}
export declare class EventDTO {
    readonly title: string;
    readonly description: string;
    readonly date: Date;
    readonly location: LocationDTO;
    readonly event_image: string;
    readonly creator: Types.ObjectId;
    readonly attendees: Types.ObjectId[];
    readonly category: string;
    readonly max_attendees: number;
    readonly min_attendees: number;
    readonly creation_date: Date;
    readonly whatsapp_group?: WhatsAppGroupDTO;
}
