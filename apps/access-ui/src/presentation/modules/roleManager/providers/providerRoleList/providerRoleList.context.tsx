import React, { createContext, useEffect } from "react";
import type { TRole } from "@access-manager/types";
import useGetAllRoles from "@presentation/hooks/useCase/useGetAllRoles";
import { TApplicationResponse } from "src/core/types/http";

export const RoleListStateContext = createContext<
  | {
      getAllRoles: () => Promise<TApplicationResponse<TRole[]>>;
      loading: boolean;
      roles: TRole[];
    }
  | undefined
>(undefined);

export function RoleListProvider({ children }: React.PropsWithChildren) {
  const { loading, getAllRoles, roles } = useGetAllRoles();

  useEffect(() => {
    getAllRoles();
  }, []);
  const value = {
    roles,
    loading,
    getAllRoles,
  };

  return (
    <RoleListStateContext.Provider value={value}>
      {children}
    </RoleListStateContext.Provider>
  );
}
