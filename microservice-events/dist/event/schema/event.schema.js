"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSchema = void 0;
const mongoose = require("mongoose");
exports.EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});
exports.EventSchema.index({ title: 1 }, { unique: true });
//# sourceMappingURL=event.schema.js.map