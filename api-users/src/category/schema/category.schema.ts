import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    interests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'interests'}],
}, {
    timestamps: true
});