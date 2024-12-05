"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestSchema = void 0;
const mongoose = require("mongoose");
exports.InterestSchema = new mongoose.Schema({
    name: { type: String, required: true }
});
exports.InterestSchema.index({ name: 1 }, { unique: true });
//# sourceMappingURL=interest.schema.js.map