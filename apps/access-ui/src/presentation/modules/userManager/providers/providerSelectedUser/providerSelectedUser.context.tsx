import React, { createContext, useState } from "react";
import type { TUser } from "@access-manager/types";

export const SelectedUserStateContext = createContext<
  | {
      handleSelectUser: (selectedUser: TUser) => void;
      handleUnSelectUser: () => void;
      user: TUser | null;
    }
  | undefined
>(undefined);

export function SelectedUserProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<TUser | null>(null);

  const handleSelectUser = (selectedUser: TUser) => {
    setUser(selectedUser);
  };
  const handleUnSelectUser = () => {
    setUser(null);
  };
  const value = {
    user,
    handleSelectUser,
    handleUnSelectUser,
  };

  return (
    <SelectedUserStateContext.Provider value={value}>
      {children}
    </SelectedUserStateContext.Provider>
  );
}
