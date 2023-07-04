import React, { createContext, useState } from "react";
import type { TRole } from "@access-manager/types";

export const SelectedRoleStateContext = createContext<
  | {
      handleSelectRole: (selectedRole: TRole) => void;
      handleUnSelectRole: () => void;
      role: TRole | null;
    }
  | undefined
>(undefined);

export function SelectedRoleProvider({ children }: React.PropsWithChildren) {
  const [role, setRole] = useState<TRole | null>(null);

  const handleSelectRole = (selectedRole: TRole) => {
    setRole(selectedRole);
  };
  const handleUnSelectRole = () => {
    setRole(null);
  };
  const value = {
    role,
    handleSelectRole,
    handleUnSelectRole,
  };

  return (
    <SelectedRoleStateContext.Provider value={value}>
      {children}
    </SelectedRoleStateContext.Provider>
  );
}
