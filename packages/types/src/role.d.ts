export type TRoleType = {
  id: string;
  name: string;
  description: string;
};

export type TRole = {
  createdAt: string;
  description: string;
  id: string | null;
  name: string;
  roleTypeId: string;
  updatedAt: string;
};
