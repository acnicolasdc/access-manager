import { AuthScreen } from "./auth.component";

export const AuthScreenComponent = AuthScreen;
export default {
  path: "/",
  title: "Authentication",
  element: () => <AuthScreen />,
};
