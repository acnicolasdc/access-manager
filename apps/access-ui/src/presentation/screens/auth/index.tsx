import { AuthScreen } from "./auth.component";

export const AuthScreenComponent = AuthScreen;
export default {
  path: "/auth",
  title: "Authentication",
  element: () => <AuthScreen />,
};
