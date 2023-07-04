import { useState } from "react";
import type {
  TAuthentication,
  TAuthenticationResponse,
} from "@access-manager/types";
import AuthApiDataSourceImpl from "@data/dataSource/api/authApiDataSource";
import { AuthRepositoryImpl } from "@data/repository/authRepositoryImpl";
import { SignIn } from "@domain/useCase/auth/signIn";

export default function useSignIn() {
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserDate] = useState<TAuthenticationResponse | null>(
    null
  );

  const signInUseCase = new SignIn(
    new AuthRepositoryImpl(new AuthApiDataSourceImpl())
  );

  async function signIn(params: TAuthentication) {
    setLoading(true);
    const response = await signInUseCase.invoke(params);
    setLoading(false);
    setUserDate(response.result);
    return response;
  }
  function resetSignIn() {
    if (!signIn) return;
    setLoading(false);
    return setUserDate(null);
  }
  return {
    signIn,
    resetSignIn,
    userData,
    loading,
  };
}
