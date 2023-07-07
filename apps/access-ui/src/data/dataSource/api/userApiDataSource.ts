import get from "lodash/get";
import type { TApplicationResponse } from "@core/types/http";
import { httpClient } from "@core/http/axios";
import { userApiEndpoint } from "./endpoint/userApiEndpoint";
import IUserDataSource from "../userDataSource";
import type {
  TUser,
  TGenericErrorResponse,
  TGenericCreatedOrUpdateResponse,
  TUserCreate,
  TUserUpdate,
} from "@access-manager/types";

export default class UserApiDataSourceImpl implements IUserDataSource {
  async getAll(): Promise<TApplicationResponse<TUser[]>> {
    const response = await httpClient.get<TUser[] | TGenericErrorResponse>(
      userApiEndpoint.getAll
    );
    const result = Array.isArray(response.data) ? response.data : [];
    const statusCode = get(response, "data.statusCode", 0);
    const error = get(response, "data.error", "");
    const message = get(response, "data.message", []);
    return {
      result,
      statusCode,
      error,
      message,
    };
  }
  async update(
    params: TUserUpdate
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>> {
    const response = await httpClient.patch<
      TGenericCreatedOrUpdateResponse | TGenericErrorResponse
    >(`${userApiEndpoint.update}/${params.id}`, params);
    const id = get(response, "data.id", null);
    const statusCode = get(response, "data.statusCode", 0);
    const error = get(response, "data.error", "");
    const message = get(response, "data.message", []);
    return {
      result: id ? { id } : id,
      statusCode,
      error,
      message,
    };
  }
  async create(params: TUserCreate): Promise<
    TApplicationResponse<TGenericCreatedOrUpdateResponse | null>
  > {
    const response = await httpClient.post<
      TGenericCreatedOrUpdateResponse | TGenericErrorResponse
    >(userApiEndpoint.create, params);
    const idCreated = get(response, "data.id", null);
    const statusCode = get(response, "data.statusCode", 0);
    const error = get(response, "data.error", "");
    const message = get(response, "data.message", []);
    return {
      result: idCreated ? { id: idCreated } : idCreated,
      statusCode,
      error,
      message,
    };
  }
}
