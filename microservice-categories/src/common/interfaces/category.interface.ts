import { IInterest } from "./interest.interface";

export interface ICategory extends Document{
    id?: string;
    name: string;
    interests: IInterest[];
}
