import React, { createContext, useEffect } from "react";
import type { TUser } from "@access-manager/types";
import useGetAllUsers from "@presentation/hooks/useCase/useGetAllUsers";
import { TApplicationResponse } from "src/core/types/http";

export const UserListStateContext = createContext<
  | {
      getAllUsers: () => Promise<TApplicationResponse<TUser[]>>;
      loading: boolean;
      users: TUser[];
    }
  | undefined
>(undefined);

export function UserListProvider({ children }: React.PropsWithChildren) {
  const { loading, getAllUsers, users } = useGetAllUsers();

  useEffect(() => {
    getAllUsers();
  }, []);
  const value = {
    users,
    loading,
    getAllUsers,
  };

  return (
    <UserListStateContext.Provider value={value}>
      {children}
    </UserListStateContext.Provider>
  );
}
