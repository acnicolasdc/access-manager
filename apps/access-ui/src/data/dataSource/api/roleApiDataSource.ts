import get from "lodash/get";
import type { TApplicationResponse } from "@core/types/http";
import { httpClient } from "@core/http/axios";
import { roleApiEndpoint } from "./endpoint/roleApiEndpoint";
import IRoleDataSource from "../roleDataSource";
import type {
  TRole,
  TGenericErrorResponse,
  TGenericCreatedOrUpdateResponse,
} from "@access-manager/types";

export default class RoleApiDataSourceImpl implements IRoleDataSource {
  async getAll(): Promise<TApplicationResponse<TRole[]>> {
    const response = await httpClient.get<TRole[] | TGenericErrorResponse>(
      roleApiEndpoint.getAll
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
  async create(
    params: Omit<TRole, "createdAt" | "updatedAt" | "id">
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>> {
    const response = await httpClient.post<
      TGenericCreatedOrUpdateResponse | TGenericErrorResponse
    >(roleApiEndpoint.create, params);
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
  async update(
    params: Omit<TRole, "createdAt" | "updatedAt">
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>> {
    const response = await httpClient.patch<
      TGenericCreatedOrUpdateResponse | TGenericErrorResponse
    >(`${roleApiEndpoint.update}/${params.id}`, params);
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
}
