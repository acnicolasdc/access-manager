import { TRole } from './role';

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
  createdAt: string;
  updatedAt: string;
  roleId: string;
  role: TRole
};

export type TUserCreate = Omit<TUser, "createdAt" | "updatedAt" | "role" | "id">
export type TUserUpdate = Omit<TUser, "createdAt" | "updatedAt" | "role">