import * as mongoose from 'mongoose';

export const InterestSchema = new mongoose.Schema({
    name: { type: String, required: true }
});