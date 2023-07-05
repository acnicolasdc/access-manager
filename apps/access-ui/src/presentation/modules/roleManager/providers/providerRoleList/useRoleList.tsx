import { useContext } from "react";
import { RoleListStateContext } from "./providerRoleList.context";

export function useRoleList() {
  const context = useContext(RoleListStateContext);
  if (context === undefined) {
    throw new Error("useRoleList must be used within a RoleListProvider");
  }
  return context;
}
