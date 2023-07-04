import { PartialType } from '@nestjs/swagger';
import { CreateRoleTypeDto } from './create-roleType.dto';

export class RoleTypeDTO extends PartialType(CreateRoleTypeDto) {
  id?: string;
}
