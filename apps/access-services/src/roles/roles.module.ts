import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './models/role.model';
import { RoleService } from './services/role.service';
import { RoleController } from './controllers/roles.controller';
import { RoleDao } from './dao/role.dao';

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleService, RoleDao],
  exports: [RoleService],
})
export class RoleModule {}
