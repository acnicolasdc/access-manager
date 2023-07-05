import get from "lodash/get";
import type { TApplicationResponse } from "@core/types/http";
import { httpClient } from "@core/http/axios";
import { roleApiEndpoint } from "./endpoint/roleApiEndpoint";
import IRoleDataSource from "../roleDataSource";
import type { TRole, TGenericErrorResponse } from "@access-manager/types";

export default class RoleApiDataSourceImpl implements IRoleDataSource {
  async getAll(): Promise<TApplicationResponse<TRole[]>> {
    const response = await httpClient.get<TRole[] | TGenericErrorResponse>(
      roleApiEndpoint.getAll
    );
    const result = Array.isArray(response.data) ? response.data : [];
    const statusCode = get(response, "data.statusCode", 0);
    const error = get(response, "data.error", "");
    const message = get(response, "data.message", []);
    console.log(result)
    return {
      result,
      statusCode,
      error,
      message,
    };
  }
}
