import { Schema, model } from 'mongoose';
import { TAddress, TUserInfo, TUserName } from './contacts.interface';

//User Name Schema
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name Is Required'],
    trim: true,
    minlength: [3, 'First name must be at least 3 characters long.'],
    maxlength: [20, 'First name must not exceed 20 characters.'],
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: [true, 'Last Name Is Required'],
    trim: true,
    minlength: [3, 'Last name must be at least 3 characters long.'],
    maxlength: [10, 'Last name must not exceed 20 characters.'],
  },
});

//User Address Schema
const userAddressSchema = new Schema<TAddress>({
  city: {
    type: String,
    required: [true, 'City Name Is Required'],
    trim: true,
    minlength: [3, 'City name must be at least 3 characters long.'],
    maxlength: [20, 'City name must not exceed 20 characters.'],
  },
  country: {
    type: String,
    required: [true, 'Country Name Is Required'],
    trim: true,
  },
});

//Create Contact Information Schema
const createUserContactsSchema = new Schema<TUserInfo>({
  name: { type: userNameSchema, required: [true, 'Name Is Required'] },
  email: { type: String, trim: true },
  phone: {
    type: String,
    required: [true, 'Phone Number Is Required'],
    trim: true,
    unique: true,
  },
  address: { type: userAddressSchema, required: [true, 'Address Is Required'] },
  profile_picture: {
    type: String,
    required: [true, 'Profile Photo Is Required'],
  },
  isDeleted: { type: Boolean, default: false },
});

//Pre MiddleWare Mongoose
//When Find Queary Apply
createUserContactsSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  return next();
});

//When FindOne Queary Apply
createUserContactsSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  return next();
});

//When Aggregate Queary Apply
createUserContactsSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  return next();
});

//Model Creation
export const contactsModel = model<TUserInfo>(
  'contact',
  createUserContactsSchema,
);
