import type { TApplicationResponse } from "@core/types/http";
import type { IAuthRepository } from "@domain/repository/authRepository";
import type { TAuthentication, TAuthenticationResponse } from "@access-manager/types";

export interface IRefreshUseCase {
  invoke: (params: TAuthentication) => Promise<TApplicationResponse<TAuthenticationResponse | null>>;
}
export class SignIn implements IRefreshUseCase {
  private signInRepo: IAuthRepository;
  constructor(_refreshRepo: IAuthRepository) {
    this.signInRepo = _refreshRepo;
  }
  async invoke(params: TAuthentication) {
    return this.signInRepo.signIn(params);
  }
}
