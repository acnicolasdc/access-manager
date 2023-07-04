import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RoleType as RoleTypeModel } from '../models/roleType.model';
import { RoleTypeDTO } from '../dtos/roleType.dto';
import { CreateRoleTypeDto } from '../dtos/create-roleType.dto';

@Injectable()
export class RoleTypeDao {
  constructor(
    @InjectModel(RoleTypeModel)
    private readonly roleTypeModel: typeof RoleTypeModel,
  ) {}

  findAll(): Promise<RoleTypeDTO[]> {
    return this.roleTypeModel.findAll();
  }

  findOne(id: string): Promise<RoleTypeDTO> {
    return this.roleTypeModel.findOne({ where: { id } });
  }

  create(role: CreateRoleTypeDto): Promise<RoleTypeDTO> {
    return this.roleTypeModel.create(role);
  }

  update(role: RoleTypeDTO): Promise<[number, RoleTypeDTO[]]> {
    const { id, ...rest } = role;
    return this.roleTypeModel.update(rest, {
      returning: true,
      where: { id },
    });
  }
}
