import { PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';

export class RoleDTO extends PartialType(CreateRoleDto) {
  id?: string;
}
