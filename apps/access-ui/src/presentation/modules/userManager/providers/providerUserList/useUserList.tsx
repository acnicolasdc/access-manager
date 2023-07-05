import { useContext } from "react";
import { UserListStateContext } from "./providerUserList.context";

export function useUserList() {
  const context = useContext(UserListStateContext);
  if (context === undefined) {
    throw new Error("useUserList must be used within a UserListProvider");
  }
  return context;
}
