import { TRole } from "@access-manager/types";
import type { TTableUserListHeader } from "./tableRoleList";

export const HEADER: readonly TTableUserListHeader[] = [
  { title: "Name", index: 0 },
  { title: "Description", index: 1 },
  { title: "Role Type Name", index: 2 },
  { title: "Role Type Description", index: 3 },
  { title: "", index: 4 },
];

export const COUNT_ADDITIONAL_COLUMNS = 1;

export const MOCK_DATA: TRole[] = [
  {
    id: "",
    name: "nicolas@gmail.com",
    description: "Nicolas",
    roleTypeId: '',
    roleType: {
      id: "",
      name: "",
      description: "",
    },
  },
];
