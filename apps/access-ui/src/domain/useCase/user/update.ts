import type { TApplicationResponse } from "@core/types/http";
import type { IUserRepository } from "@domain/repository/userRepository";
import type {
  TGenericCreatedOrUpdateResponse,
  TUserUpdate,
} from "@access-manager/types";

export interface IUpdateUseCase {
  invoke: (
    params: TUserUpdate
  ) => Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
export class Update implements IUpdateUseCase {
  private updateRepo: IUserRepository;
  constructor(_updateRepo: IUserRepository) {
    this.updateRepo = _updateRepo;
  }
  async invoke(params: TUserUpdate) {
    return this.updateRepo.update(params);
  }
}
