import { UUIDV4 } from 'sequelize';
import {
  Default,
  PrimaryKey,
  Table,
  Model,
  Column,
  AllowNull,
} from 'sequelize-typescript';
import type { IRoleTypeEntity } from '../entity/roleType';

@Table({ timestamps: true })
export class RoleType extends Model<IRoleTypeEntity> {
  @PrimaryKey
  @Default(UUIDV4)
  @Column
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  @Column
  description: string;
}
