import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(255)
  lastName: string;

  @IsNotEmpty()
  @MaxLength(255)
  firstName: string;

  @IsPhoneNumber('NG')
  phoneNumber: string;

  @IsStrongPassword()
  password: string;
}
