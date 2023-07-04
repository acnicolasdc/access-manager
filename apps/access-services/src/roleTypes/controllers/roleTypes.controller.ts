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
import { RoleTypeService } from '../services/roleType.service';
import { CreateRoleTypeDto } from '../dtos/create-roleType.dto';
import { RoleTypeDTO } from '../dtos/roleType.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@ApiTags('RoleType')
@ApiBearerAuth()
@Controller('roleType')
export class RoleTypeController {
  constructor(private readonly roleTypeService: RoleTypeService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getUsers(): Promise<RoleTypeDTO[]> {
    return this.roleTypeService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: string): Promise<RoleTypeDTO> {
    return this.roleTypeService.findOne(id);
  }

  @Post()
  async createUser(@Body() user: CreateRoleTypeDto): Promise<{ id: string }> {
    const id = await this.roleTypeService.create(user);
    return { id };
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() user: RoleTypeDTO,
  ): Promise<void> {
    user.id = id;
    return this.roleTypeService.update(user);
  }
}
