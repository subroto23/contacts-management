import { StatusCodes } from 'http-status-codes';
import AppErrors from '../../../Errors/AppErrors';
import { TUserInfo } from './contacts.interface';
import { contactsModel } from './contacts.models';

//create User Contacts
const createContactIntoDb = async (payload: TUserInfo) => {
  const result = await contactsModel.create(payload);
  return result;
};

//Get All User Contacts Details
const getAllContactFromDb = async () => {
  const result = await contactsModel.find().select({
    name: true,
    email: true,
    phone: true,
    address: true,
    profile_picture: true,
  });
  return result;
};

//Get Single User Contacts Details
const getSingleContactFromDb = async (id: string) => {
  //If not existing contact
  const isExist = await contactsModel.findById(id);
  if (!isExist) {
    throw new AppErrors(StatusCodes.BAD_REQUEST, 'Failed! Data not found !!');
  }

  const result = await contactsModel.findById(id).select({
    name: true,
    email: true,
    phone: true,
    address: true,
    profile_picture: true,
  });
  return result;
};

//update User Contact Details
const updateContactFromDb = async (id: string, payload: Partial<TUserInfo>) => {
  const { name, address, ...remaining } = payload;
  //Exist Data Checking
  const isExist = await contactsModel.findById(id);
  if (!isExist) {
    throw new AppErrors(StatusCodes.BAD_REQUEST, 'Failed!! Data not found.');
  }

  //Seperated Premative and non premative data
  const modifiedContactInfo: Record<string, unknown> = { ...remaining };

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
  const result = await contactsModel.findByIdAndUpdate(
    id,
    modifiedContactInfo,
    { new: true, runValidators: true },
  );
  return result;
};

//Delete User Contact
const deleteContactFromDb = async (id: string) => {
  //If not existing contact
  const isExist = await contactsModel.findById(id);
  if (!isExist) {
    throw new AppErrors(StatusCodes.BAD_REQUEST, 'Failed!! Data not found.');
  }

  const result = await contactsModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true, runValidators: true },
  );
  return result;
};

export const contactServices = {
  createContactIntoDb,
  getAllContactFromDb,
  getSingleContactFromDb,
  updateContactFromDb,
  deleteContactFromDb,
};
