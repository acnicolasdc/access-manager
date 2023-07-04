import { IsString, IsUUID, IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsUUID()
  @IsNotEmpty()
  roleTypeId: string;
}
