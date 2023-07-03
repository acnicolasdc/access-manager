import { useContext } from "react";
import { SelectedUserStateContext } from "./providerSelectedUser.context";

export function useSelectedUser() {
  const context = useContext(SelectedUserStateContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedUser must be used within a SelectedUserProvider"
    );
  }
  return context;
}
