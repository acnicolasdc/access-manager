import { UUIDV4 } from 'sequelize';
import {
  Default,
  PrimaryKey,
  Table,
  Model,
  Column,
  AllowNull,
  Unique,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import type { IUserEntity } from '../entity/user';
import { Role } from '../../roles/models/role.model';
@Table({ timestamps: true })
export class User extends Model<IUserEntity> {
  @PrimaryKey
  @Default(UUIDV4)
  @Column
  id: string;

  @AllowNull(false)
  @Column
  firstName: string;

  @Column
  middleName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @Unique
  @AllowNull(false)
  @Column
  email: string;

  @Column
  secondaryEmail: string;

  @AllowNull(false)
  @Column
  phoneNumber: string;

  @Column
  secondaryPhoneNumber: string;

  @Column
  homeAddress: string;

  @AllowNull(false)
  @Column
  password: string;

  @AllowNull(false)
  @ForeignKey(() => Role)
  @Column
  roleId: string;

  @BelongsTo(() => Role, { foreignKey: 'roleId' })
  role: Role;
}
