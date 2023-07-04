import { NoSessionRoute } from "@presentation/containers/noSessionRoute";
import { AuthScreen } from "./auth.component";

export const AuthScreenComponent = AuthScreen;
export default {
  path: "/",
  title: "Authentication",
  element: (
    <NoSessionRoute path="/">
      <AuthScreen />
    </NoSessionRoute>
  ),
};
