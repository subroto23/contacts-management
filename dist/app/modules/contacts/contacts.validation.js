"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactValidationSchema = void 0;
const zod_1 = require("zod");
// User Name Schema
const userNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z
        .string({
        required_error: 'First Name Is Required',
        invalid_type_error: 'First name must be a string.',
    })
        .min(3, 'First name must be at least 3 characters long.')
        .max(20, 'First name must not exceed 20 characters.')
        .trim(),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z
        .string({
        required_error: 'Last Name Is Required',
        invalid_type_error: 'Last name must be a string.',
    })
        .min(3, 'Last name must be at least 3 characters long.')
        .max(20, 'Last name must not exceed 20 characters.')
        .trim(),
});
// User Address Schema
const userAddressValidationSchema = zod_1.z.object({
    city: zod_1.z
        .string({
        required_error: 'City Name Is Required',
        invalid_type_error: 'City name must be a string.',
    })
        .min(3, 'City name must be at least 3 characters long.')
        .max(20, 'City name must not exceed 20 characters.')
        .trim(),
    country: zod_1.z
        .string({
        required_error: 'Country Name Is Required',
        invalid_type_error: 'Country name must be a string.',
    })
        .trim(),
});
// Create Contact Validation Schema
const createContactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: userNameValidationSchema,
        email: zod_1.z.string().optional(),
        phone: zod_1.z
            .string({ required_error: 'Phone Number Is Required' })
            .trim()
            .refine((val) => /^[+]?[0-9]*$/.test(val), {
            message: 'Phone number must contain only digits and optional leading +.',
        }),
        address: userAddressValidationSchema,
        profile_picture: zod_1.z.string({
            required_error: 'Profile Photo URL Is Required',
            invalid_type_error: 'Profile Photo Is Web Link Type.',
        }),
        isDeleted: zod_1.z.boolean().default(false),
    }),
});
//--------------------Update Validation-------------
// User Name Schema
const updateUserNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z
        .string({
        invalid_type_error: 'First name must be a string.',
    })
        .min(3, 'First name must be at least 3 characters long.')
        .max(20, 'First name must not exceed 20 characters.')
        .trim()
        .optional(),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z
        .string({
        invalid_type_error: 'Last name must be a string.',
    })
        .min(3, 'Last name must be at least 3 characters long.')
        .max(20, 'Last name must not exceed 20 characters.')
        .trim()
        .optional(),
});
// User Address Schema
const updateUserAddressValidationSchema = zod_1.z.object({
    city: zod_1.z
        .string({
        invalid_type_error: 'City name must be a string.',
    })
        .min(3, 'City name must be at least 3 characters long.')
        .max(20, 'City name must not exceed 20 characters.')
        .trim()
        .optional(),
    country: zod_1.z
        .string({
        invalid_type_error: 'Country name must be a string.',
    })
        .trim()
        .optional(),
});
const updateContactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: updateUserNameValidationSchema.optional(),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z
            .string()
            .trim()
            .optional()
            .refine((val) => val == null || /^[+]?[0-9]*$/.test(val), {
            message: 'Phone number must contain only digits and optional leading +.',
        }),
        address: updateUserAddressValidationSchema.optional(),
        profile_picture: zod_1.z.string().optional(),
    }),
});
//Export Constant Verible
exports.contactValidationSchema = {
    createContactValidationSchema,
    updateContactValidationSchema,
};
