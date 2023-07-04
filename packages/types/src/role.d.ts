export type TRoleType = {
  id: string;
  name: string;
};

export type TRole = {
  id: string;
  name: string;
  description: string;
  roleType: TRoleType;
};
