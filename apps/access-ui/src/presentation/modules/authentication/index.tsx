import { memo } from "react";
import { useUserSession } from "@presentation/providers/providerUserSession";
import { UpdateUserForm } from "./containers/signInForm";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const { login } = useUserSession();
  const navigate = useNavigate();
  return (
    <UpdateUserForm
      onSuccess={(accessToken) => {
        login(accessToken);
        setTimeout(() => navigate("/manager"), 300);
      }}
      onError={() => {
        console.log("toast");
      }}
    />
  );
}

export const AuthenticationMemorized = memo(Authentication);
