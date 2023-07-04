import { ProtectedRoute } from "@presentation/containers/protectedRoute";
import { UserScreen } from "./user.component";

export const UserScreenComponent = UserScreen;
export default {
  path: "/users",
  title: "User List",
  element: (
    <ProtectedRoute>
      <UserScreen />
    </ProtectedRoute>
  ),
};
