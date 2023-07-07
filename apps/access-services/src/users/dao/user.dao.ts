import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User as UserModel } from '../models/user.model';
import { UserDTO } from '../dtos/user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { Role } from 'src/roles/models/role.model';

@Injectable()
export class UserDao {
  constructor(
    @InjectModel(UserModel)
    private readonly userModel: typeof UserModel,
  ) {}

  findAll(): Promise<UserDTO[]> {
    return this.userModel.findAll({
      include: [
        {
          model: Role,
        },
      ],
    });
  }

  findOne(id: string): Promise<UserDTO> {
    return this.userModel.findOne({ where: { id } });
  }

  findByEmail(email: string): Promise<UserDTO> {
    return this.userModel.findOne({ where: { email }, raw: true });
  }

  create(user: CreateUserDto): Promise<UserDTO> {
    return this.userModel.create(user);
  }

  update(user: UserDTO): Promise<[number, UserDTO[]]> {
    const { id, ...rest } = user;
    return this.userModel.update(rest, {
      returning: true,
      where: { id },
    });
  }
}
