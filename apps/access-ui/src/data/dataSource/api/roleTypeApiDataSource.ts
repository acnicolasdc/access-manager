import get from "lodash/get";
import type { TApplicationResponse } from "@core/types/http";
import { httpClient } from "@core/http/axios";
import { roleTypeApiEndpoint } from "./endpoint/roleTypeApiEndpoint";
import IRoleTypeDataSource from "../roleTypeDataSource";
import type { TRoleType, TGenericErrorResponse } from "@access-manager/types";

export default class RoleTypeApiDataSourceImpl implements IRoleTypeDataSource {
  async getAll(): Promise<TApplicationResponse<TRoleType[]>> {
    const response = await httpClient.get<TRoleType[] | TGenericErrorResponse>(
      roleTypeApiEndpoint.getAll
    );
    const result = Array.isArray(response.data) ? response.data : [];
    const statusCode = get(response, "data.statusCode", 0);
    const error = get(response, "data.error", "");
    const message = get(response, "data.message", []);
    console.log(result);
    return {
      result,
      statusCode,
      error,
      message,
    };
  }
}
