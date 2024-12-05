import * as mongoose from "mongoose";
export declare const EventSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    description: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title: string;
    description: string;
}>> & mongoose.FlatRecord<{
    title: string;
    description: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
