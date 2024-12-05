export class NotificationDTO {
    readonly user: string;
    readonly event?: string;
    readonly message: string;
    readonly read: boolean;
    readonly send_date: Date;
}