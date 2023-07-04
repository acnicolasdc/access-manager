import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { RoleType as RoleTypeModel } from '../models/roleType.model';
import { RoleTypeDao } from './roleType.dao';
import {
  functionsMock,
  recordMock,
  createMock,
  updateResultMock,
} from '../mocks/roleType.mock';

describe('RoleTypeDao', () => {
  let dao: RoleTypeDao;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoleTypeDao,
        {
          provide: getModelToken(RoleTypeModel),
          useValue: functionsMock,
        },
      ],
    }).compile();

    dao = module.get<RoleTypeDao>(RoleTypeDao);
  });

  it('should return an array of frequencies', async () => {
    const result = [recordMock];
    jest.spyOn(functionsMock, 'findAll').mockImplementation(() => result);
    expect(await dao.findAll()).toBe(result);
  });

  it('should return the roleType', async () => {
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
