import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RoleService } from '../services/role.service';
import { CreateRoleDto } from '../dtos/create-role.dto';
import { RoleDTO } from '../dtos/role.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@ApiTags('Role')
@ApiBearerAuth()
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @UseGuards(JwtAuthGuard)
  @Get('getAll')
  getRoles(): Promise<RoleDTO[]> {
    return this.roleService.findAll();
  }

  @Get(':id')
  getRole(@Param('id') id: string): Promise<RoleDTO> {
    return this.roleService.findOne(id);
  }

  @Post()
  async createRole(@Body() role: CreateRoleDto): Promise<{ id: string }> {
    const id = await this.roleService.create(role);
    return { id };
  }

  @Patch('updateRole/:id')
  updateRole(@Param('id') id: string, @Body() role: RoleDTO): Promise<void> {
    role.id = id;
    return this.roleService.update(role);
  }
}
