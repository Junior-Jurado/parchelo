import * as mongoose from "mongoose";
export declare const LocationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    address: string;
    latitude: number;
    longitude: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    address: string;
    latitude: number;
    longitude: number;
}>> & mongoose.FlatRecord<{
    address: string;
    latitude: number;
    longitude: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
