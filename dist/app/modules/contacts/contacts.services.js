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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppErrors_1 = __importDefault(require("../../../Errors/AppErrors"));
const contacts_models_1 = require("./contacts.models");
//create User Contacts
const createContactIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contacts_models_1.contactsModel.create(payload);
    return result;
});
//Get All User Contacts Details
const getAllContactFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contacts_models_1.contactsModel.find().select({
        name: true,
        email: true,
        phone: true,
        address: true,
        profile_picture: true,
    });
    return result;
});
//Get Single User Contacts Details
const getSingleContactFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //If not existing contact
    const isExist = yield contacts_models_1.contactsModel.findById(id);
    if (!isExist) {
        throw new AppErrors_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Failed! Data not found !!');
    }
    const result = yield contacts_models_1.contactsModel.findById(id).select({
        name: true,
        email: true,
        phone: true,
        address: true,
        profile_picture: true,
    });
    return result;
});
//update User Contact Details
const updateContactFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, address } = payload, remaining = __rest(payload, ["name", "address"]);
    //Exist Data Checking
    const isExist = yield contacts_models_1.contactsModel.findById(id);
    if (!isExist) {
        throw new AppErrors_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Failed!! Data not found.');
    }
    //Seperated Premative and non premative data
    const modifiedContactInfo = Object.assign({}, remaining);
    //non premative fied name modified
    if (name && Object.keys(name).length > 0) {
        for (const [key, value] of Object.entries(name)) {
            modifiedContactInfo[`name.${key}`] = value;
        }
    }
    //non premative fied address modified
    if (address && Object.keys(address).length > 0) {
        for (const [key, value] of Object.entries(address)) {
            modifiedContactInfo[`address.${key}`] = value;
        }
    }
    //Update Contact Information
    const result = yield contacts_models_1.contactsModel.findByIdAndUpdate(id, modifiedContactInfo, { new: true, runValidators: true });
    return result;
});
//Delete User Contact
const deleteContactFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //If not existing contact
    const isExist = yield contacts_models_1.contactsModel.findById(id);
    if (!isExist) {
        throw new AppErrors_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Failed!! Data not found.');
    }
    const result = yield contacts_models_1.contactsModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true, runValidators: true });
    return result;
});
exports.contactServices = {
    createContactIntoDb,
    getAllContactFromDb,
    getSingleContactFromDb,
    updateContactFromDb,
    deleteContactFromDb,
};
