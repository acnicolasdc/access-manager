import { Injectable } from '@nestjs/common';
import { RoleDao } from '../dao/role.dao';
import { RoleDTO } from '../dtos/role.dto';
import { CreateRoleDto } from '../dtos/create-role.dto';
import { ErrorException } from '../../utils/exception-filters/error-response.exception';
import * as RoleExceptions from '../exceptions/role.exceptions.json';

@Injectable()
export class RoleService {
  constructor(private readonly roleDao: RoleDao) {}

  async findAll(): Promise<RoleDTO[]> {
    try {
      return await this.roleDao.findAll();
    } catch (error) {
      throw new ErrorException(
        RoleExceptions['7000'].code,
        RoleExceptions['7000'].error,
        [error?.message],
      );
    }
  }

  async findOne(id: string): Promise<RoleDTO> {
    try {
      return await this.roleDao.findOne(id);
    } catch (error) {
      throw new ErrorException(
        RoleExceptions['7001'].code,
        RoleExceptions['7001'].error,
        [error?.message],
      );
    }
  }

  async create(user: CreateRoleDto): Promise<string> {
    try {
      const result: RoleDTO = await this.roleDao.create(user);
      return result.id;
    } catch (error) {
      throw new ErrorException(
        RoleExceptions['7002'].code,
        RoleExceptions['7002'].error,
        [error?.message],
      );
    }
  }

  async update(user: RoleDTO): Promise<void> {
    let result: [number, RoleDTO[]];
    try {
      result = await this.roleDao.update(user);
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
