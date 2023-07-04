import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useUserSession } from "@presentation/providers/providerUserSession";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { session } = useUserSession();
  if (!session) {
    return <Navigate to="/" replace />;
  }
  return children;
}
