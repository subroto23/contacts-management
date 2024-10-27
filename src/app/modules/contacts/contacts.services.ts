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
  const result = await contactsModel.find();
  return result;
};

//Get Single User Contacts Details
const getSingleContactFromDb = async (id: string) => {
  //If not existing contact
  const isExist = await contactsModel.findById(id);
  if (!isExist) {
    throw new AppErrors(
      StatusCodes.BAD_REQUEST,
      'Failed! Contact not found !!',
    );
  }

  const result = await contactsModel.findById(id);
  return result;
};

//update User Contact Details
const updateContactFromDb = async () => {
  console.log('Update Services Contact Info Testing');
};

//Delete User Contact
const deleteContactFromDb = async (id: string) => {
  //If not existing contact
  const isExist = await contactsModel.findById(id);
  if (!isExist) {
    throw new AppErrors(StatusCodes.BAD_REQUEST, 'Failed!! Contact not found.');
  }
  const result = await contactsModel.findByIdAndUpdate(id, { isDeleted: true });
  return result;
};

export const contactServices = {
  createContactIntoDb,
  getAllContactFromDb,
  getSingleContactFromDb,
  updateContactFromDb,
  deleteContactFromDb,
};
