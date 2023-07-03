import type { TTableUserListHeader } from "./tableUserList";
import type { TUser } from "@access-manager/types";

export const HEADER: readonly TTableUserListHeader[] = [
  { title: "First Name", index: 0 },
  { title: "Middle Name", index: 1 },
  { title: "Last Name", index: 2 },
  { title: "Email", index: 3 },
  { title: "Secondary Email", index: 4 },
  { title: "Phone", index: 5 },
  { title: "Secondary Phone", index: 6 },
  { title: "Home Address", index: 7 },
  { title: "Role", index: 8 },
  { title: "", index: 9 },
];

export const COUNT_ADDITIONAL_COLUMNS = 1;

export const MOCK_DATA: TUser[] = [
  {
    email: "nicolas@gmail.com",
    firstName: "Nicolas",
    homeAddress: "Car. 96 # 100 105",
    id: "id123",
    lastName: "Reyes",
    middleName: "",
    password: "1234",
    phoneNumber: "3186901541",
    secondaryEmail: "bill@gmail.com",
    secondaryPhoneNumber: "3176162629",
  },
];
