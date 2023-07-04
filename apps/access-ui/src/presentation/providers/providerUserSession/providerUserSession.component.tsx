import React, { createContext, useEffect, useState } from "react";
import { DEFAULT_SESSION_LOCAL_STORAGE_KEY } from "./providerUserSession.constants";

export const UserSessionStateContext = createContext<
  | {
      logout: () => void;
      login: (access_token: string) => void;
      session: boolean;
    }
  | undefined
>(undefined);

export function UserSessionProvider({ children }: React.PropsWithChildren) {
  const [session, setSession] = useState<boolean>(
    () => !!localStorage.getItem(DEFAULT_SESSION_LOCAL_STORAGE_KEY)
  );
  useEffect(() => {
    handleSessionCases();
  }, []);

  const handleSessionCases = () => {
    const accessToken = localStorage.getItem(DEFAULT_SESSION_LOCAL_STORAGE_KEY);
    if (session && !accessToken) {
      return setSession(false);
    }
    if (!session && !!accessToken) {
      return setSession(true);
    }
  };
  const login = (access_token: string) => {
    localStorage.setItem(DEFAULT_SESSION_LOCAL_STORAGE_KEY, access_token);
    setSession(true);
  };
  const logout = () => {
    localStorage.removeItem(DEFAULT_SESSION_LOCAL_STORAGE_KEY);
    setSession(false);
  };
  const value = {
    session,
    logout,
    login,
  };

  return (
    <UserSessionStateContext.Provider value={value}>
      {children}
    </UserSessionStateContext.Provider>
  );
}
