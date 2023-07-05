import type { TApplicationResponse } from "@core/types/http";
import type { IAuthRepository } from "@domain/repository/authRepository";
import type {
  TAuthentication,
  TAuthenticationResponse,
} from "@access-manager/types";

export interface ISignInUseCase {
  invoke: (
    params: TAuthentication
  ) => Promise<TApplicationResponse<TAuthenticationResponse | null>>;
}
export class SignIn implements ISignInUseCase {
  private signInRepo: IAuthRepository;
  constructor(_signInRepo: IAuthRepository) {
    this.signInRepo = _signInRepo;
  }
  async invoke(params: TAuthentication) {
    return this.signInRepo.signIn(params);
  }
}
