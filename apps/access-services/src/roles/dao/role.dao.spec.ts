import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { Role as RoleModel } from '../models/role.model';
import { RoleDao } from './role.dao';
import {
  functionsMock,
  recordMock,
  createMock,
  updateResultMock,
} from '../mocks/role.mock';

describe('RoleDao', () => {
  let dao: RoleDao;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoleDao,
        {
          provide: getModelToken(RoleModel),
          useValue: functionsMock,
        },
      ],
    }).compile();

    dao = module.get<RoleDao>(RoleDao);
  });

  it('should return an array of frequencies', async () => {
    const result = [recordMock];
    jest.spyOn(functionsMock, 'findAll').mockImplementation(() => result);
    expect(await dao.findAll()).toBe(result);
  });

  it('should return the role', async () => {
    jest.spyOn(functionsMock, 'findOne').mockImplementation(() => recordMock);
    expect(await dao.findOne(recordMock.id)).toBe(recordMock);
  });

  it('should return undefined', async () => {
    jest.spyOn(functionsMock, 'create').mockImplementation(() => recordMock);
    expect(await dao.create(createMock)).toBe(recordMock);
  });

  it('should return undefined', async () => {
    jest
      .spyOn(functionsMock, 'update')
      .mockImplementation(() => updateResultMock);
    expect(await dao.update(recordMock)).toBe(updateResultMock);
  });
});
