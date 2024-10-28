import * as mongoose from "mongoose";
export declare const EventSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    description: string;
    title: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    description: string;
    title: string;
}>> & mongoose.FlatRecord<{
    description: string;
    title: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
