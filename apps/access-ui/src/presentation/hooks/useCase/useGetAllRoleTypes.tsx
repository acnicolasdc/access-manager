import { useState } from "react";
import type { TRoleType } from "@access-manager/types";
import RoleTypeApiDataSourceImpl from "@data/dataSource/api/roleTypeApiDataSource";
import { RoleTypeRepositoryImpl } from "@data/repository/roleTypeRepositoryImpl";
import { GetAll } from "@domain/useCase/roleType/getAll";

export default function useGetAllRoleTypes() {
  const [loading, setLoading] = useState<boolean>(false);
  const [roleTypes, setRoles] = useState<TRoleType[]>([]);

  const getAllUseCase = new GetAll(
    new RoleTypeRepositoryImpl(new RoleTypeApiDataSourceImpl())
  );

  async function getAllRoleTypes() {
    setLoading(true);
    const response = await getAllUseCase.invoke();
    setLoading(false);
    setRoles(response.result);
    return response;
  }
  function resetGetAllRoleTypes() {
    if (!getAllRoleTypes) return;
    setLoading(false);
    return setRoles([]);
  }
  return {
    getAllRoleTypes,
    resetGetAllRoleTypes,
    roleTypes,
    loading,
  };
}
