import * as mongoose from "mongoose";
import { title } from "process";


export const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});
EventSchema.index({title:1}, {unique:true})