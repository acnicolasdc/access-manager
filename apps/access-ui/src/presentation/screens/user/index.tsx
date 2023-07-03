import { UserScreen } from "./user.component";

export const UserScreenComponent = UserScreen;
export default {
  path: "/users",
  title: "User List",
  element: () => <UserScreen />,
};
