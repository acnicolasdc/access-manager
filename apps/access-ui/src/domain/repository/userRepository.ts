import type { TApplicationResponse } from "@core/types/http";
import type {
  TUser,
  TGenericCreatedOrUpdateResponse,
  TUserCreate,
  TUserUpdate
} from "@access-manager/types";

export interface IUserRepository {
  getAll(): Promise<TApplicationResponse<TUser[]>>;
  update(
    params: TUserUpdate
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
  create(
    params: TUserCreate
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
