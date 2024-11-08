import { z } from 'zod';

// Cpmtact Reaction Schema
const contactReactionValidation = z.object({
  body: z.object({
    id: z.string().trim(),
    loved: z.boolean(),
  }),
});

//Export Constant Verible
export const contactReactionValidationSchema = {
  contactReactionValidation,
};
