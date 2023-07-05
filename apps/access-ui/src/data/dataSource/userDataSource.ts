import type { TApplicationResponse } from "@core/types/http";
import type {
  TGenericCreatedOrUpdateResponse,
  TUser,
} from "@access-manager/types";

export default interface IUserDataSource {
  getAll(): Promise<TApplicationResponse<TUser[]>>;
  update(
    params: Omit<TUser, "createdAt" | "updatedAt">
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
