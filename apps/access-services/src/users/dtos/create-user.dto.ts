import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateIf,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @ValidateIf((value) => value.length > 0)
  @IsOptional()
  @IsEmail()
  secondaryEmail?: string;

  @IsPhoneNumber('US')
  phoneNumber: string;

  @ValidateIf((value) => value.length > 0)
  @IsOptional()
  @IsPhoneNumber('US')
  secondaryPhoneNumber?: string;

  @IsOptional()
  @IsString()
  homeAddress?: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
