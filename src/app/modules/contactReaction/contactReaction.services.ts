import { StatusCodes } from 'http-status-codes';
import { TContactReaction } from './contactReaction.interface';
import { reactsModel } from './contactReaction.models';
import AppErrors from '../../../Errors/AppErrors';

//create Reaction Contacts
const createContactReactionIntoDb = async (payload: TContactReaction) => {
  const result = await reactsModel.create(payload);
  return result;
};

//Get All Reaction Contacts Details
const getAllContactReactionFromDb = async () => {
  const result = await reactsModel.find();
  return result;
};

//Get Single Contacts Reaction Details
const getSingleContactReactionFromDb = async (id: string) => {
  //If not existing contact
  const isExist = await reactsModel.findById(id);
  if (!isExist) {
    throw new AppErrors(StatusCodes.BAD_REQUEST, 'Failed! Data not found !!');
  }

  const result = await reactsModel.findById(id);
  return result;
};

//update User Contact Details
const updateContactReactionFromDb = async (
  id: string,
  payload: Partial<TContactReaction>,
) => {
  //Exist Data Checking
  const isExist = await reactsModel.findById(id);
  if (!isExist) {
    throw new AppErrors(StatusCodes.BAD_REQUEST, 'Failed!! Data not found.');
  }
  //Update Contact Reaction Information
  const result = await reactsModel.findByIdAndUpdate(
    id,
    { loved: payload?.loved },
    { new: true, runValidators: true },
  );
  return result;
};

export const contactReactionServices = {
  createContactReactionIntoDb,
  getAllContactReactionFromDb,
  getSingleContactReactionFromDb,
  updateContactReactionFromDb,
};
