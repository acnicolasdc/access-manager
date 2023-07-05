import type { TApplicationResponse } from "@core/types/http";
import type { IRoleRepository } from "@domain/repository/roleRepository";
import type { TRole } from "@access-manager/types";

export interface IGetAllUseCase {
  invoke: () => Promise<TApplicationResponse<TRole[]>>;
}
export class GetAll implements IGetAllUseCase {
  private getAllRepo: IRoleRepository;
  constructor(_getAllRepo: IRoleRepository) {
    this.getAllRepo = _getAllRepo;
  }
  async invoke() {
    return this.getAllRepo.getAll();
  }
}
