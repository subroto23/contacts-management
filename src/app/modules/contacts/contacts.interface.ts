export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TAddress = {
  city: string;
  country: string;
};

export type TUserInfo = {
  name: TUserName;
  email: string;
  phone: string;
  address: TAddress;
  profile_picture: string;
  isDeleted: boolean;
};
