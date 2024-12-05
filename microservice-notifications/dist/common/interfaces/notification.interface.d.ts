export interface INotification extends Document {
    user: string;
    event?: string;
    message: string;
    read: boolean;
    send_date: Date;
}
