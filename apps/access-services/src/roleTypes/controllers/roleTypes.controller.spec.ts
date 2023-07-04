import { Test, TestingModule } from '@nestjs/testing';
import { RoleTypeController } from './roleTypes.controller';
import { RoleTypeService } from '../services/roleType.service';
import { functionsMock, createMock, recordMock } from '../mocks/roleType.mock';

describe('RoleTypeController', () => {
  let controller: RoleTypeController;
  let service: RoleTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleTypeController],
      providers: [{ provide: RoleTypeService, useValue: functionsMock }],
    }).compile();

    controller = module.get<RoleTypeController>(RoleTypeController);
    service = module.get<RoleTypeService>(RoleTypeService);
  });

  it('should return an array of roleType', async () => {
    const result = [recordMock];
    jest.spyOn(service, 'findAll').mockResolvedValue(result);
    expect(await controller.getUsers()).toBe(result);
  });

  it('should return the roleType', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValue(recordMock);
    expect(await controller.getUser(recordMock.id)).toBe(recordMock);
  });

  it('should create a roleType and return the id', async () => {
    const result = {
      id: recordMock.id,
    };
    jest.spyOn(service, 'create').mockResolvedValue(recordMock.id);
    expect(await controller.createUser(createMock)).toEqual(result);
  });

  it('should update the roleType and not return a value', async () => {
    jest.spyOn(service, 'update').mockResolvedValue(undefined);
    expect(await controller.updateUser(recordMock.id, recordMock)).toBe(
      undefined,
    );
  });
});
