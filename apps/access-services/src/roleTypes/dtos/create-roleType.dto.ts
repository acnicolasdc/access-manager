import { IsString } from 'class-validator';

export class CreateRoleTypeDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
