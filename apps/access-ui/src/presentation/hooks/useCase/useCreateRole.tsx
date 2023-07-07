import { useState } from "react";
import type {
  TGenericCreatedOrUpdateResponse,
  TRoleCreate,
} from "@access-manager/types";
import RoleApiDataSourceImpl from "@data/dataSource/api/roleApiDataSource";
import { RoleRepositoryImpl } from "@data/repository/roleRepositoryImpl";
import { Create } from "@domain/useCase/role/create";

export default function useCreateRole() {
  const [loading, setLoading] = useState<boolean>(false);
  const [role, setRoles] = useState<TGenericCreatedOrUpdateResponse | null>(
    null
  );

  const createRoleUseCase = new Create(
    new RoleRepositoryImpl(new RoleApiDataSourceImpl())
  );

  async function createRole(params: TRoleCreate) {
    setLoading(true);
    const response = await createRoleUseCase.invoke(params);
    setLoading(false);
    setRoles(response.result);
    return response;
  }
  function resetCreateRole() {
    if (!createRole) return;
    setLoading(false);
    return setRoles(null);
  }
  return {
    createRole,
    resetCreateRole,
    role,
    loading,
  };
}
