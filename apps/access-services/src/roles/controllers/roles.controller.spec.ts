import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './roles.controller';
import { RoleService } from '../services/role.service';
import { functionsMock, createMock, recordMock } from '../mocks/role.mock';

describe('RoleController', () => {
  let controller: RoleController;
  let service: RoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleController],
      providers: [{ provide: RoleService, useValue: functionsMock }],
    }).compile();

    controller = module.get<RoleController>(RoleController);
    service = module.get<RoleService>(RoleService);
  });

  it('should return an array of role', async () => {
    const result = [recordMock];
    jest.spyOn(service, 'findAll').mockResolvedValue(result);
    expect(await controller.getUsers()).toBe(result);
  });

  it('should return the role', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValue(recordMock);
    expect(await controller.getUser(recordMock.id)).toBe(recordMock);
  });

  it('should create a role and return the id', async () => {
    const result = {
      id: recordMock.id,
    };
    jest.spyOn(service, 'create').mockResolvedValue(recordMock.id);
    expect(await controller.createUser(createMock)).toEqual(result);
  });

  it('should update the role and not return a value', async () => {
    jest.spyOn(service, 'update').mockResolvedValue(undefined);
    expect(await controller.updateUser(recordMock.id, recordMock)).toBe(
      undefined,
    );
  });
});
