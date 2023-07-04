import { UserScreen } from "./user.component";

export const UserScreenComponent = UserScreen;
export default {
  path: "/",
  title: "User List",
  element: () => <UserScreen />,
};
