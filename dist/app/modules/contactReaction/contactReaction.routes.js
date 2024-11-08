"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactReactionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const contactReaction_controller_1 = require("./contactReaction.controller");
const ValidateRequest_1 = __importDefault(require("../../../utlis/ValidateRequest"));
const contactReaction_Validation_1 = require("./contactReaction.Validation");
const router = express_1.default.Router();
router.get('/', contactReaction_controller_1.contactReactionController.getAllContactReactions);
router.get('/:id', contactReaction_controller_1.contactReactionController.getSingleContactReaction);
//Post Request and Validate Request
router.post('/create-contact-reaction', (0, ValidateRequest_1.default)(contactReaction_Validation_1.contactReactionValidationSchema.contactReactionValidation), contactReaction_controller_1.contactReactionController.createReactionContact);
//Put Request and Validate Request
router.patch('/update-contact-reaction/:id', (0, ValidateRequest_1.default)(contactReaction_Validation_1.contactReactionValidationSchema.updateReactionValidation), contactReaction_controller_1.contactReactionController.updateContactReaction);
exports.contactReactionRoutes = router;
