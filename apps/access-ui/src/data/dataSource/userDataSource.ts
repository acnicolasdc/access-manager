import type { TApplicationResponse } from "@core/types/http";
import type {
  TGenericCreatedOrUpdateResponse,
  TUser,
  TUserCreate,
  TUserUpdate
} from "@access-manager/types";

export default interface IUserDataSource {
  getAll(): Promise<TApplicationResponse<TUser[]>>;
  update(
    params: TUserUpdate
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
  create(
    params: TUserCreate
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
