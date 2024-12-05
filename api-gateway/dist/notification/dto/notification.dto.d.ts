import { Types } from "mongoose";
export declare class NotificationDTO {
    readonly user: Types.ObjectId;
    readonly event: Types.ObjectId | null;
    readonly message: string;
    readonly read: boolean;
    readonly send_date: Date;
}
