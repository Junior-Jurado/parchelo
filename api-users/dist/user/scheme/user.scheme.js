"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScheme = void 0;
const mongoose = require("mongoose");
exports.UserScheme = new mongoose.Schema({
    name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    main_picture_profile: { type: String, require: true },
    min_picture_profile: { type: String, require: true },
    max_picuture_profile: { type: String, require: true },
    description: { type: String, require: true },
    birthdate: { type: Date, require: true },
    created_at: { type: Date, require: true },
    updated_at: { type: Date, require: true },
}, { timestamps: true });
exports.UserScheme.index({ email: 1 }, { unique: true });
//# sourceMappingURL=user.scheme.js.map