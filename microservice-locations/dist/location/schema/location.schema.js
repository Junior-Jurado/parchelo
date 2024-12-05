"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationSchema = void 0;
const mongoose = require("mongoose");
exports.LocationSchema = new mongoose.Schema({
    address: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
});
exports.LocationSchema.index({ address: 1 });
//# sourceMappingURL=location.schema.js.map