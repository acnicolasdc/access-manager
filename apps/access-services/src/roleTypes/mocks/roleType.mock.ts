import { CreateRoleTypeDto } from '../dtos/create-roleType.dto';
import { RoleTypeDTO } from '../dtos/roleType.dto';

const functionsMock = {
  create: (): RoleTypeDTO => {
    return undefined;
  },
  findAll: (): RoleTypeDTO[] => {
    return [];
  },
  findOne: (): RoleTypeDTO => {
    return undefined;
  },
  update: (): [number, RoleTypeDTO[]] => {
    return [0, []];
  },
};

const createMock: CreateRoleTypeDto = {
  name: 'test',
  description: 'test',
};

const recordMock: RoleTypeDTO = {
  id: '6063826e-097a-4441-a66a-51a656589be8',
  ...createMock,
};

const updateResultMock: [number, RoleTypeDTO[]] = [1, [recordMock]];

export { recordMock, functionsMock, createMock, updateResultMock };
