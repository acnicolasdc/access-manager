import { memo } from "react";

import { UserForm } from "./containers/signInForm";

function Authentication() {
  return <UserForm />;
}

export const AuthenticationMemorized = memo(Authentication);
