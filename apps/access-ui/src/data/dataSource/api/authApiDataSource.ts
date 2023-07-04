import get from "lodash/get";
import type { TApplicationResponse } from "@core/types/http";
import { httpStandAloneClient } from "@core/http/axios";
import { authApiEndpoint } from "./endpoint/authApiEndpoint";
import IAuthDataSource from "../authDataSource";
import type {
  TAuthentication,
  TAuthenticationResponse,
  TGenericErrorResponse,
} from "@access-manager/types";

export default class AuthApiDataSourceImpl implements IAuthDataSource {
  async signIn(
    params: TAuthentication
  ): Promise<TApplicationResponse<TAuthenticationResponse | null>> {
    const response = await httpStandAloneClient.post<
      TAuthenticationResponse | TGenericErrorResponse
    >(authApiEndpoint.login, params);
    const access_token = get(response, "data.access_token", null);
    const statusCode = get(response, "data.statusCode", 0);
    const error = get(response, "data.error", "");
    const message = get(response, "data.message", []);
    return {
      result: access_token ? { access_token } : access_token,
      statusCode,
      error,
      message,
    };
  }
}
