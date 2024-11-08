import express from 'express';
import { contactReactionController } from './contactReaction.controller';
import ValidateRequest from '../../../utlis/ValidateRequest';
import { contactReactionValidationSchema } from './contactReaction.Validation';
const router = express.Router();

router.get('/', contactReactionController.getAllContactReactions);
router.get('/:id', contactReactionController.getSingleContactReaction);

//Post Request and Validate Request
router.post(
  '/create-contact-reaction',
  ValidateRequest(contactReactionValidationSchema.contactReactionValidation),
  contactReactionController.createReactionContact,
);

//Put Request and Validate Request
router.patch(
  '/update-contact-reaction/:id',
  ValidateRequest(contactReactionValidationSchema.contactReactionValidation),
  contactReactionController.updateContactReaction,
);

export const contactReactionRoutes = router;
