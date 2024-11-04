"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose = require("mongoose");
exports.CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    interests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'interests' }],
}, {
    timestamps: true
});
//# sourceMappingURL=category.schema.js.map