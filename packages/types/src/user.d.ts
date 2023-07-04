export type TUser = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  secondaryEmail: string;
  phoneNumber: string;
  secondaryPhoneNumber: string;
  homeAddress: string;
  password: string;
};

export type TAuthentication = {
  username: string;
  password: string;
};
