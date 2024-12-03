import { IInterest } from "./interest.interface";

export interface ICategory {
    id?: String;
    name: String;
    interests: IInterest[];
}
