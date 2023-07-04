import { Test, TestingModule } from '@nestjs/testing';
import { RoleService } from './role.service';
import { RoleDao } from '../dao/role.dao';
import {
  functionsMock,
  recordMock,
  createMock,
  updateResultMock,
} from '../mocks/role.mock';

describe('RoleService', () => {
  let service: RoleService;
  let dao: RoleDao;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleService, { provide: RoleDao, useValue: functionsMock }],
    }).compile();

    service = module.get<RoleService>(RoleService);
    dao = module.get<RoleDao>(RoleDao);
  });

  it('should return all role', async () => {
    const result = [recordMock];
    jest.spyOn(dao, 'findAll').mockResolvedValue(result);
    expect(await service.findAll()).toBe(result);
  });

  it('should return the role', async () => {
    jest.spyOn(dao, 'findOne').mockResolvedValue(recordMock);
    expect(await service.findOne(recordMock.id)).toBe(recordMock);
  });

  it('should return the id', async () => {
    jest.spyOn(dao, 'create').mockResolvedValue(recordMock);
    expect(await service.create(createMock)).toBe(recordMock.id);
  });

  it('should return undefined', async () => {
    jest.spyOn(dao, 'update').mockResolvedValue(updateResultMock);
    expect(await service.update(recordMock)).toBe(undefined);
  });
});
