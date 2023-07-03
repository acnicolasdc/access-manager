import { UUIDV4 } from 'sequelize';
import {
  Default,
  PrimaryKey,
  Table,
  Model,
  Column,
  AllowNull,
  Unique,
} from 'sequelize-typescript';
import type { TUser } from '@access-manager/types';

@Table({ timestamps: true })
export class User extends Model<TUser> {
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
}
