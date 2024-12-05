export declare class WhatsAppGroupDTO {
    readonly link: string;
}
export declare class EventDTO {
    readonly title: string;
    readonly description: string;
    readonly date: Date;
    readonly location: string;
    readonly event_image: string;
    readonly creator: string;
    readonly attendees: string[];
    readonly category: string;
    readonly max_attendees: number;
    readonly min_attendees: number;
    readonly creation_date: Date;
    readonly whatsapp_group?: WhatsAppGroupDTO;
}
