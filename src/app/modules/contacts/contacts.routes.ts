import express from 'express';
import { contactController } from './contacts.controller';
import ValidateRequest from '../../../utlis/ValidateRequest';
import { contactValidationSchema } from './contacts.validation';
const router = express.Router();

router.get('/', contactController.getAllContact);
router.get('/:id', contactController.getSingleContact);

//Post Request and Validate Request
router.post(
  '/create-contact',
  ValidateRequest(contactValidationSchema.createContactValidationSchema),
  contactController.createContact,
);

//Put Request and Validate Request
router.put('/update-contact/:id', contactController.updateContact);

router.delete('/:id', contactController.deleteContact);

export const contactRoutes = router;
