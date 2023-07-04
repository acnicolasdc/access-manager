import type { TApplicationResponse } from "@core/types/http";
import type { TAuthentication, TAuthenticationResponse } from "@access-manager/types";

export interface IAuthRepository {
  signIn(params: TAuthentication): Promise<TApplicationResponse<TAuthenticationResponse | null>>;
}
