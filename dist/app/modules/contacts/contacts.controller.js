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
exports.contactController = void 0;
const contacts_services_1 = require("./contacts.services");
const CatchAsync_1 = __importDefault(require("../../../utlis/CatchAsync"));
const sendResponse_1 = __importDefault(require("../../../utlis/sendResponse"));
//create User Contacts
const createContact = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = req.body;
    //Will Call services Function to send this Data
    const createdinfo = yield contacts_services_1.contactServices.createContactIntoDb(contactData);
    //Response Send to The Fronted
    (0, sendResponse_1.default)(res, {
        statusCodes: 200,
        success: true,
        message: 'Contact created Successfully',
        data: createdinfo,
    });
}));
//-------------------------------------------------------------
//Get All User Contacts Details
const getAllContact = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Will Call services Function to send this Data
    const allContactsInfo = yield contacts_services_1.contactServices.getAllContactFromDb();
    //Response Send to The Fronted
    (0, sendResponse_1.default)(res, {
        statusCodes: 200,
        success: true,
        message: 'All Contacts reterived Successfully',
        data: allContactsInfo,
    });
}));
//-------------------------------------------------------------
//Get Single User Contacts Details
const getSingleContact = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    //Will Call services Function to send this Data
    const singleContactInfo = yield contacts_services_1.contactServices.getSingleContactFromDb(id);
    //Response Send to The Fronted
    (0, sendResponse_1.default)(res, {
        statusCodes: 200,
        success: true,
        message: 'Single Contact reterived Successfully',
        data: singleContactInfo,
    });
}));
//-------------------------------------------------------------
//update User Contact Details
const updateContact = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateData = req.body;
    //Will Call services Function to send this Data
    const updatedContactInfo = yield contacts_services_1.contactServices.updateContactFromDb(id, updateData);
    //Response Send to The Fronted
    (0, sendResponse_1.default)(res, {
        statusCodes: 200,
        success: true,
        message: 'Contact updated Successfully',
        data: updatedContactInfo,
    });
}));
//-------------------------------------------------------------
//Delete User Contact
const deleteContact = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    //Will Call services Function to send this Data
    const deletedContactInfo = yield contacts_services_1.contactServices.deleteContactFromDb(id);
    //Response Send to The Fronted
    (0, sendResponse_1.default)(res, {
        statusCodes: 200,
        success: true,
        message: 'Contact deleted Successfully',
        data: deletedContactInfo,
    });
}));
exports.contactController = {
    createContact,
    getAllContact,
    getSingleContact,
    updateContact,
    deleteContact,
};
