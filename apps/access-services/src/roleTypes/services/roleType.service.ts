import { Injectable } from '@nestjs/common';
import { RoleTypeDao } from '../dao/roleType.dao';
import { RoleTypeDTO } from '../dtos/roleType.dto';
import { CreateRoleTypeDto } from '../dtos/create-roleType.dto';
import { ErrorException } from '../../utils/exception-filters/error-response.exception';
import * as RoleExceptions from '../exceptions/roleType.exceptions.json';

@Injectable()
export class RoleTypeService {
  constructor(private readonly roleTypeDao: RoleTypeDao) {}

  async findAll(): Promise<RoleTypeDTO[]> {
    try {
      return await this.roleTypeDao.findAll();
    } catch (error) {
      throw new ErrorException(
        RoleExceptions['7000'].code,
        RoleExceptions['7000'].error,
        [error?.message],
      );
    }
  }

  async findOne(id: string): Promise<RoleTypeDTO> {
    try {
      return await this.roleTypeDao.findOne(id);
    } catch (error) {
      throw new ErrorException(
        RoleExceptions['7001'].code,
        RoleExceptions['7001'].error,
        [error?.message],
      );
    }
  }

  async create(user: CreateRoleTypeDto): Promise<string> {
    try {
      const result: RoleTypeDTO = await this.roleTypeDao.create(user);
      return result.id;
    } catch (error) {
      throw new ErrorException(
        RoleExceptions['7002'].code,
        RoleExceptions['7002'].error,
        [error?.message],
      );
    }
  }

  async update(user: RoleTypeDTO): Promise<void> {
    let result: [number, RoleTypeDTO[]];
    try {
      result = await this.roleTypeDao.update(user);
    } catch (error) {
      throw new ErrorException(
        RoleExceptions['7003'].code,
        RoleExceptions['7003'].error,
        [error?.message],
      );
    }
    if (result[0] === 0)
      throw new ErrorException(404, `This record does not exist`);
  }
}
