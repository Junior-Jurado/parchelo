import * as mongoose from 'mongoose';

export const InsterestSchema = new mongoose.Schema({
    name: { type: String, required: true }
})