"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    main_picture_profile: { type: String, required: true },
    min_picture_profile: { type: String, required: true },
    max_picuture_profile: { type: String, required: true },
    description: { type: String, required: true },
    birthdate: { type: Date, required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'categories' }],
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true }
}, {
    timestamps: true
});
exports.UserSchema.index({ email: 1 }, { unique: true });
//# sourceMappingURL=user.schema.js.map