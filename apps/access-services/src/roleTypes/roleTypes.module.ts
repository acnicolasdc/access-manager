import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleType } from './models/roleType.model';
import { RoleTypeService } from './services/roleType.service';
import { RoleTypeController } from './controllers/roleTypes.controller';
import { RoleTypeDao } from './dao/roleType.dao';

@Module({
  imports: [SequelizeModule.forFeature([RoleType])],
  controllers: [RoleTypeController],
  providers: [RoleTypeService, RoleTypeDao],
  exports: [RoleTypeService],
})
export class RoleTypeModule {}
