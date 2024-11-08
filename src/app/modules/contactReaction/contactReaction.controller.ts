import CatchAsync from '../../../utlis/CatchAsync';
import sendResponse from '../../../utlis/sendResponse';
import { TContactReaction } from './contactReaction.interface';
import { contactReactionServices } from './contactReaction.services';

//create Contact Reaction
const createReactionContact = CatchAsync(async (req, res) => {
  const contactReactopmData = req.body;
  //Will Call services Function to send this Data
  const createdinfo =
    await contactReactionServices.createContactReactionIntoDb(
      contactReactopmData,
    );

  //Response Send to The Fronted
  sendResponse(res, {
    statusCodes: 200,
    success: true,
    message: 'Reaction created Successfully',
    data: createdinfo,
  });
});

//-------------------------------------------------------------
//Get All Reaction Contacts Details
const getAllContactReactions = CatchAsync(async (req, res) => {
  //Will Call services Function to send this Data
  const allContactsInfo =
    await contactReactionServices.getAllContactReactionFromDb();

  //Response Send to The Fronted
  sendResponse(res, {
    statusCodes: 200,
    success: true,
    message: 'All Contacts Reaction reterived Successfully',
    data: allContactsInfo,
  });
});

//-------------------------------------------------------------
//Get Single Reaction Contacts Details
const getSingleContactReaction = CatchAsync(async (req, res) => {
  const id = req.params?.id;
  //Will Call services Function to send this Data
  const singleContactInfo =
    await contactReactionServices.getSingleContactReactionFromDb(id);

  //Response Send to The Fronted
  sendResponse(res, {
    statusCodes: 200,
    success: true,
    message: 'Single Contact Reaction reterived Successfully',
    data: singleContactInfo,
  });
});

//-------------------------------------------------------------
//update Contact Reaction Details
const updateContactReaction = CatchAsync(async (req, res) => {
  const id = req.params.id as string;
  const updateData: Partial<TContactReaction> = req.body;

  //Will Call services Function to send this Data
  const updatedContactInfo =
    await contactReactionServices.updateContactReactionFromDb(id, updateData);

  //Response Send to The Fronted
  sendResponse(res, {
    statusCodes: 200,
    success: true,
    message: 'Contact Reaction updated Successfully',
    data: updatedContactInfo,
  });
});

export const contactReactionController = {
  createReactionContact,
  getAllContactReactions,
  getSingleContactReaction,
  updateContactReaction,
};
