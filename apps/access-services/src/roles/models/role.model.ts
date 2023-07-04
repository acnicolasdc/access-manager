import { UUIDV4 } from 'sequelize';
import {
  Default,
  PrimaryKey,
  Table,
  Model,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import type { IRoleEntity } from '../entity/role';
import { RoleType } from '../../roleTypes/models/roleType.model';

@Table({ timestamps: true })
export class Role extends Model<IRoleEntity> {
  @PrimaryKey
  @Default(UUIDV4)
  @Column
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  @Column
  description: string;

  @AllowNull(false)
  @ForeignKey(() => RoleType)
  @Column
  roleTypeId: string;

  @BelongsTo(() => RoleType, { foreignKey: 'roleTypeId' })
  roleType: RoleType;
}
