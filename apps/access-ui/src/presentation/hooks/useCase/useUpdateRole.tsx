import { useState } from "react";
import type {
  TGenericCreatedOrUpdateResponse,
  TRoleUpdate,
} from "@access-manager/types";
import RoleApiDataSourceImpl from "@data/dataSource/api/roleApiDataSource";
import { RoleRepositoryImpl } from "@data/repository/roleRepositoryImpl";
import { Update } from "@domain/useCase/role/update";

export default function useUpdateRole() {
  const [loading, setLoading] = useState<boolean>(false);
  const [role, setRoles] = useState<TGenericCreatedOrUpdateResponse | null>(
    null
  );

  const updateRoleUseCase = new Update(
    new RoleRepositoryImpl(new RoleApiDataSourceImpl())
  );

  async function updateRole(params: TRoleUpdate) {
    setLoading(true);
    const response = await updateRoleUseCase.invoke(params);
    setLoading(false);
    setRoles(response.result);
    return response;
  }
  function resetUpdateRole() {
    if (!updateRole) return;
    setLoading(false);
    return setRoles(null);
  }
  return {
    updateRole,
    resetUpdateRole,
    role,
    loading,
  };
}
