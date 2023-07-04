import { CreateRoleDto } from '../dtos/create-role.dto';
import { RoleDTO } from '../dtos/role.dto';

const functionsMock = {
  create: (): RoleDTO => {
    return undefined;
  },
  findAll: (): RoleDTO[] => {
    return [];
  },
  findOne: (): RoleDTO => {
    return undefined;
  },
  update: (): [number, RoleDTO[]] => {
    return [0, []];
  },
};

const createMock: CreateRoleDto = {
  name: 'test',
  description: 'test',
  roleTypeId: 'testId',
};

const recordMock: RoleDTO = {
  id: '6063826e-097a-4441-a66a-51a656589be8',
  ...createMock,
};

const updateResultMock: [number, RoleDTO[]] = [1, [recordMock]];

export { recordMock, functionsMock, createMock, updateResultMock };
