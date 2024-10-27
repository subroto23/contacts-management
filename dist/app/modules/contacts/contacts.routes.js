"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const contacts_controller_1 = require("./contacts.controller");
const ValidateRequest_1 = __importDefault(require("../../../utlis/ValidateRequest"));
const contacts_validation_1 = require("./contacts.validation");
const router = express_1.default.Router();
router.get('/', contacts_controller_1.contactController.getAllContact);
router.get('/:id', contacts_controller_1.contactController.getSingleContact);
//Post Request and Validate Request
router.post('/create-contact', (0, ValidateRequest_1.default)(contacts_validation_1.contactValidationSchema.createContactValidationSchema), contacts_controller_1.contactController.createContact);
//Put Request and Validate Request
router.patch('/update-contact/:id', (0, ValidateRequest_1.default)(contacts_validation_1.contactValidationSchema.updateContactValidationSchema), contacts_controller_1.contactController.updateContact);
router.delete('/:id', contacts_controller_1.contactController.deleteContact);
exports.contactRoutes = router;
