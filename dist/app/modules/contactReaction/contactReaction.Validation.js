"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactReactionValidationSchema = void 0;
const zod_1 = require("zod");
// Cpmtact Reaction Schema
const contactReactionValidation = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string().trim(),
        loved: zod_1.z.boolean(),
    }),
});
const updateReactionValidation = zod_1.z.object({
    body: zod_1.z.object({
        loved: zod_1.z.boolean(),
    }),
});
//Export Constant Verible
exports.contactReactionValidationSchema = {
    contactReactionValidation,
    updateReactionValidation,
};
