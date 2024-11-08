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
exports.contactReactionServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const contactReaction_models_1 = require("./contactReaction.models");
const AppErrors_1 = __importDefault(require("../../../Errors/AppErrors"));
//create Reaction Contacts
const createContactReactionIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contactReaction_models_1.reactsModel.create(payload);
    return result;
});
//Get All Reaction Contacts Details
const getAllContactReactionFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contactReaction_models_1.reactsModel.find();
    return result;
});
//Get Single Contacts Reaction Details
const getSingleContactReactionFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //If not existing contact
    const isExist = yield contactReaction_models_1.reactsModel.findById(id);
    if (!isExist) {
        throw new AppErrors_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Failed! Data not found !!');
    }
    const result = yield contactReaction_models_1.reactsModel.findById(id);
    return result;
});
//update User Contact Details
const updateContactReactionFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    //Exist Data Checking
    const isExist = yield contactReaction_models_1.reactsModel.findById(id);
    if (!isExist) {
        throw new AppErrors_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Failed!! Data not found.');
    }
    //Update Contact Reaction Information
    const result = yield contactReaction_models_1.reactsModel.findByIdAndUpdate(id, { loved: payload === null || payload === void 0 ? void 0 : payload.loved }, { new: true, runValidators: true });
    return result;
});
exports.contactReactionServices = {
    createContactReactionIntoDb,
    getAllContactReactionFromDb,
    getSingleContactReactionFromDb,
    updateContactReactionFromDb,
};
