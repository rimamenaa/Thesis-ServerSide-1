import { MinLength, MaxLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  // fullName

  @MinLength(4)
  @MaxLength(255)
  readonly fullName: string;
  // Email

  @MinLength(5)
  @MaxLength(255)
  @IsEmail()
  readonly email: string;
  // Password

  @MinLength(5)
  @MaxLength(1024)
  readonly password: string;
}
