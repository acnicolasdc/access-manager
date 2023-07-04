import { useContext } from "react";
import { SelectedRoleStateContext } from "./providerSelectedRole.context";

export function useSelectedRole() {
  const context = useContext(SelectedRoleStateContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedRole must be used within a SelectedRoleProvider"
    );
  }
  return context;
}
