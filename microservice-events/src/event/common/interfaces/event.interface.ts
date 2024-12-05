export class IWhatsAppGroupDTO {
    link: string;
}

export interface IEvent extends Document{
    title: string;
    description: string;
    date: Date;
    locations: string;
    event_image: string;
    creator: string;
    attendees: string[];
    category: string;
    max_attendees: number;
    min_attendees: number;
    creation_date: Date;
    whatsapp_group?: IWhatsAppGroupDTO;
}