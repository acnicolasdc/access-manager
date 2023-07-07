export type TRoleType = {
  id: string;
  name: string;
  description: string;
};

export type TRole = {
  createdAt: string;
  description: string;
  id: string;
  name: string;
  roleTypeId: string;
  updatedAt: string;
  roleType: TRoleType
};


export type TRoleCreate = Omit<TRole, "createdAt" | "updatedAt" | "roleType" | "id">
export type TRoleUpdate= Omit<TRole, "createdAt" | "updatedAt" | "roleType">
