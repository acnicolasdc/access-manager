import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role as RoleModel } from '../models/role.model';
import { RoleDTO } from '../dtos/role.dto';
import { CreateRoleDto } from '../dtos/create-role.dto';

@Injectable()
export class RoleDao {
  constructor(
    @InjectModel(RoleModel)
    private readonly roleModel: typeof RoleModel,
  ) {}

  findAll(): Promise<RoleDTO[]> {
    return this.roleModel.findAll();
  }

  findOne(id: string): Promise<RoleDTO> {
    return this.roleModel.findOne({ where: { id } });
  }

  create(role: CreateRoleDto): Promise<RoleDTO> {
    return this.roleModel.create(role);
  }

  update(role: RoleDTO): Promise<[number, RoleDTO[]]> {
    const { id, ...rest } = role;
    return this.roleModel.update(rest, {
      returning: true,
      where: { id },
    });
  }
}
