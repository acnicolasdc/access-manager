import type { TApplicationResponse } from "@core/types/http";
import type { IRoleRepository } from "@domain/repository/roleRepository";
import type {
  TGenericCreatedOrUpdateResponse,
  TRoleUpdate,
} from "@access-manager/types";

export interface IUpdateUseCase {
  invoke: (
    params: TRoleUpdate
  ) => Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
export class Update implements IUpdateUseCase {
  private updateRepo: IRoleRepository;
  constructor(_updateRepo: IRoleRepository) {
    this.updateRepo = _updateRepo;
  }
  async invoke(params: TRoleUpdate) {
    return this.updateRepo.update(params);
  }
}
