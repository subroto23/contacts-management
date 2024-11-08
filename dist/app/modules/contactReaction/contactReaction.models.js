"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactsModel = void 0;
const mongoose_1 = require("mongoose");
//Reaction Schema
const reactionSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'Card Id Is Required'],
        trim: true,
    },
    loved: {
        type: Boolean,
        default: false,
    },
});
//Model Creation
exports.reactsModel = (0, mongoose_1.model)('reaction', reactionSchema);
