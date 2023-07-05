import type { TApplicationResponse } from "@core/types/http";
import type { IRoleTypeRepository } from "@domain/repository/roleTypeRepository";
import type { TRoleType } from "@access-manager/types";

export interface IGetAllUseCase {
  invoke: () => Promise<TApplicationResponse<TRoleType[]>>;
}
export class GetAll implements IGetAllUseCase {
  private getAllRepo: IRoleTypeRepository;
  constructor(_getAllRepo: IRoleTypeRepository) {
    this.getAllRepo = _getAllRepo;
  }
  async invoke() {
    return this.getAllRepo.getAll();
  }
}
