"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactReactionController = void 0;
const CatchAsync_1 = __importDefault(require("../../../utlis/CatchAsync"));
const sendResponse_1 = __importDefault(require("../../../utlis/sendResponse"));
const contactReaction_services_1 = require("./contactReaction.services");
//create Contact Reaction
const createReactionContact = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactReactopmData = req.body;
    //Will Call services Function to send this Data
    const createdinfo = yield contactReaction_services_1.contactReactionServices.createContactReactionIntoDb(contactReactopmData);
    //Response Send to The Fronted
    (0, sendResponse_1.default)(res, {
        statusCodes: 200,
        success: true,
        message: 'Reaction created Successfully',
        data: createdinfo,
    });
}));
//-------------------------------------------------------------
//Get All Reaction Contacts Details
const getAllContactReactions = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Will Call services Function to send this Data
    const allContactsInfo = yield contactReaction_services_1.contactReactionServices.getAllContactReactionFromDb();
    //Response Send to The Fronted
    (0, sendResponse_1.default)(res, {
        statusCodes: 200,
        success: true,
        message: 'All Contacts Reaction reterived Successfully',
        data: allContactsInfo,
    });
}));
//-------------------------------------------------------------
//Get Single Reaction Contacts Details
const getSingleContactReaction = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    //Will Call services Function to send this Data
    const singleContactInfo = yield contactReaction_services_1.contactReactionServices.getSingleContactReactionFromDb(id);
    //Response Send to The Fronted
    (0, sendResponse_1.default)(res, {
        statusCodes: 200,
        success: true,
        message: 'Single Contact Reaction reterived Successfully',
        data: singleContactInfo,
    });
}));
//-------------------------------------------------------------
//update Contact Reaction Details
const updateContactReaction = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateData = req.body;
    //Will Call services Function to send this Data
    const updatedContactInfo = yield contactReaction_services_1.contactReactionServices.updateContactReactionFromDb(id, updateData);
    //Response Send to The Fronted
    (0, sendResponse_1.default)(res, {
        statusCodes: 200,
        success: true,
        message: 'Contact Reaction updated Successfully',
        data: updatedContactInfo,
    });
}));
exports.contactReactionController = {
    createReactionContact,
    getAllContactReactions,
    getSingleContactReaction,
    updateContactReaction,
};
