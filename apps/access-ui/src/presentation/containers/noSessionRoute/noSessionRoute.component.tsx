import { PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserSession } from "@presentation/providers/providerUserSession";

export interface NoSessionRouteProps {
  path: string;
}

export function NoSessionRoute({
  children,
  path,
}: PropsWithChildren<NoSessionRouteProps>) {
  const { session } = useUserSession();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (session && path === location.pathname) {
      navigate("/users");
    }
  }, []);
  return children;
}
