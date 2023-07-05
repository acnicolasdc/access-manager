import { useState } from "react";
import type { TRole } from "@access-manager/types";
import RoleApiDataSourceImpl from "@data/dataSource/api/roleApiDataSource";
import { RoleRepositoryImpl } from "@data/repository/roleRepositoryImpl";
import { GetAll } from "@domain/useCase/role/getAll";

export default function useGetAllRoles() {
  const [loading, setLoading] = useState<boolean>(false);
  const [roles, setRoles] = useState<TRole[]>([]);

  const getAllUseCase = new GetAll(
    new RoleRepositoryImpl(new RoleApiDataSourceImpl())
  );

  async function getAllRoles() {
    setLoading(true);
    const response = await getAllUseCase.invoke();
    setLoading(false);
    setRoles(response.result);
    return response;
  }
  function resetGetAllRoles() {
    if (!getAllRoles) return;
    setLoading(false);
    return setRoles([]);
  }
  return {
    getAllRoles,
    resetGetAllRoles,
    roles,
    loading,
  };
}
