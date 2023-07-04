import type { TApplicationResponse } from "@core/types/http";
import type { TAuthentication, TAuthenticationResponse } from "@access-manager/types";

export default interface IAuthDataSource {
  signIn(params: TAuthentication): Promise<TApplicationResponse<TAuthenticationResponse | null>>;
}
