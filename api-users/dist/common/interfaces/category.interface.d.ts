import { IInterest } from "./interest.interface";
export interface ICategory extends Document {
    id?: String;
    name: String;
    interests: IInterest[];
}
