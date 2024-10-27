import { contactServices } from './contacts.services';
import CatchAsync from '../../../utlis/CatchAsync';
import sendResponse from '../../../utlis/sendResponse';
import { TUserInfo } from './contacts.interface';

//create User Contacts
const createContact = CatchAsync(async (req, res) => {
  const contactData = req.body;
  //Will Call services Function to send this Data
  const createdinfo = await contactServices.createContactIntoDb(contactData);

  //Response Send to The Fronted
  sendResponse(res, {
    statusCodes: 200,
    success: true,
    message: 'Contact created Successfully',
    data: createdinfo,
  });
});

//-------------------------------------------------------------
//Get All User Contacts Details
const getAllContact = CatchAsync(async (req, res) => {
  //Will Call services Function to send this Data
  const allContactsInfo = await contactServices.getAllContactFromDb();

  //Response Send to The Fronted
  sendResponse(res, {
    statusCodes: 200,
    success: true,
    message: 'All Contacts reterived Successfully',
    data: allContactsInfo,
  });
});

//-------------------------------------------------------------
//Get Single User Contacts Details
const getSingleContact = CatchAsync(async (req, res) => {
  const id = req.params?.id;
  //Will Call services Function to send this Data
  const singleContactInfo = await contactServices.getSingleContactFromDb(id);

  //Response Send to The Fronted
  sendResponse(res, {
    statusCodes: 200,
    success: true,
    message: 'Single Contact reterived Successfully',
    data: singleContactInfo,
  });
});

//-------------------------------------------------------------
//update User Contact Details
const updateContact = CatchAsync(async (req, res) => {
  const id = req.params.id as string;
  const updateData: Partial<TUserInfo> = req.body;
  //Will Call services Function to send this Data
  const updatedContactInfo = await contactServices.updateContactFromDb(
    id,
    updateData,
  );

  //Response Send to The Fronted
  sendResponse(res, {
    statusCodes: 200,
    success: true,
    message: 'Contact updated Successfully',
    data: updatedContactInfo,
  });
});

//-------------------------------------------------------------
//Delete User Contact
const deleteContact = CatchAsync(async (req, res) => {
  const id = req.params?.id as string;
  //Will Call services Function to send this Data
  const deletedContactInfo = await contactServices.deleteContactFromDb(id);

  //Response Send to The Fronted
  sendResponse(res, {
    statusCodes: 200,
    success: true,
    message: 'Contact deleted Successfully',
    data: deletedContactInfo,
  });
});

export const contactController = {
  createContact,
  getAllContact,
  getSingleContact,
  updateContact,
  deleteContact,
};
