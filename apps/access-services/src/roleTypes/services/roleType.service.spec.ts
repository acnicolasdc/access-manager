import { Test, TestingModule } from '@nestjs/testing';
import { RoleTypeService } from './roleType.service';
import { RoleTypeDao } from '../dao/roleType.dao';
import {
  functionsMock,
  recordMock,
  createMock,
  updateResultMock,
} from '../mocks/roleType.mock';

describe('RoleTypeService', () => {
  let service: RoleTypeService;
  let dao: RoleTypeDao;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoleTypeService,
        { provide: RoleTypeDao, useValue: functionsMock },
      ],
    }).compile();

    service = module.get<RoleTypeService>(RoleTypeService);
    dao = module.get<RoleTypeDao>(RoleTypeDao);
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
