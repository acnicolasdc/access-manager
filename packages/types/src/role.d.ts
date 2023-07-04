export type TRoleType = {
  id: string;
  name: string;
  description: string
};

export type TRole = {
  id: string;
  name: string;
  description: string;
  roleTypeId: string;
  roleType: TRoleType;
};
