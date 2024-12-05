import * as mongoose from "mongoose";

export const LocationSchema = new mongoose.Schema({
    address: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },

});

LocationSchema.index({ address:1 })
