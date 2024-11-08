import { z } from 'zod';

// User Name Schema
const userNameValidationSchema = z.object({
  firstName: z
    .string({
      required_error: 'First Name Is Required',
      invalid_type_error: 'First name must be a string.',
    })
    .min(3, 'First name must be at least 3 characters long.')
    .max(20, 'First name must not exceed 20 characters.')
    .trim(),
  middleName: z.string().optional(),
  lastName: z
    .string({
      required_error: 'Last Name Is Required',
      invalid_type_error: 'Last name must be a string.',
    })
    .min(3, 'Last name must be at least 3 characters long.')
    .max(20, 'Last name must not exceed 20 characters.')
    .trim(),
});

// User Address Schema
const userAddressValidationSchema = z.object({
  city: z
    .string({
      required_error: 'City Name Is Required',
      invalid_type_error: 'City name must be a string.',
    })
    .min(3, 'City name must be at least 3 characters long.')
    .max(20, 'City name must not exceed 20 characters.')
    .trim(),
  country: z
    .string({
      required_error: 'Country Name Is Required',
      invalid_type_error: 'Country name must be a string.',
    })
    .trim(),
});

// Create Contact Validation Schema
const createContactValidationSchema = z.object({
  body: z.object({
    name: userNameValidationSchema,
    email: z.string().optional(),
    phone: z
      .string({ required_error: 'Phone Number Is Required' })
      .trim()
      .refine((val) => /^[+]?[0-9]*$/.test(val), {
        message:
          'Phone number must contain only digits and optional leading +.',
      }),
    address: userAddressValidationSchema,
    profile_picture: z.string({
      required_error: 'Profile Photo URL Is Required',
      invalid_type_error: 'Profile Photo Is Web Link Type.',
    }),
    isDeleted: z.boolean().default(false),
  }),
});

//--------------------Update Validation-------------
// User Name Schema
const updateUserNameValidationSchema = z.object({
  firstName: z
    .string({
      invalid_type_error: 'First name must be a string.',
    })
    .min(3, 'First name must be at least 3 characters long.')
    .max(20, 'First name must not exceed 20 characters.')
    .trim()
    .optional(),
  middleName: z.string().optional(),
  lastName: z
    .string({
      invalid_type_error: 'Last name must be a string.',
    })
    .min(3, 'Last name must be at least 3 characters long.')
    .max(20, 'Last name must not exceed 20 characters.')
    .trim()
    .optional(),
});

// User Address Schema
const updateUserAddressValidationSchema = z.object({
  city: z
    .string({
      invalid_type_error: 'City name must be a string.',
    })
    .min(3, 'City name must be at least 3 characters long.')
    .max(20, 'City name must not exceed 20 characters.')
    .trim()
    .optional(),
  country: z
    .string({
      invalid_type_error: 'Country name must be a string.',
    })
    .trim()
    .optional(),
});

const updateContactValidationSchema = z.object({
  body: z.object({
    name: updateUserNameValidationSchema.optional(),
    email: z.string().email().optional(),
    phone: z
      .string()
      .trim()
      .optional()
      .refine((val) => val == null || /^[+]?[0-9]*$/.test(val), {
        message:
          'Phone number must contain only digits and optional leading +.',
      }),
    address: updateUserAddressValidationSchema.optional(),
    profile_picture: z.string().optional(),
  }),
});

//Export Constant Verible
export const contactValidationSchema = {
  createContactValidationSchema,
  updateContactValidationSchema,
};
