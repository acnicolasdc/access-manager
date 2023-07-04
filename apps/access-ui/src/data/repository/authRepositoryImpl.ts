import type { TApplicationResponse } from "@core/types/http";
import type { IAuthRepository } from "@domain/repository/authRepository";
import type { TAuthentication, TAuthenticationResponse } from "@access-manager/types";
import IAuthDataSource from "@data/dataSource/authDataSource";


export class AuthRepositoryImpl implements IAuthRepository {
  dataSource: IAuthDataSource;

  constructor(_dataSource: IAuthDataSource) {
    this.dataSource = _dataSource;
  }
  async signIn(
    params: TAuthentication
  ): Promise<TApplicationResponse<TAuthenticationResponse | null>> {
    return this.dataSource.signIn(params);
  }
}
