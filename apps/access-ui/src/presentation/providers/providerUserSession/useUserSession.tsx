import { useContext } from "react";
import { UserSessionStateContext } from "./providerUserSession.component";

export function useUserSession() {
  const context = useContext(UserSessionStateContext);
  if (context === undefined) {
    throw new Error("useUserSession must be used within a UserSessionProvider");
  }
  return context;
}
