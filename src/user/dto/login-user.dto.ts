import { MinLength, MaxLength, IsEmail } from 'class-validator';

export class LoginUserDto {
  @MinLength(6)
  @MaxLength(255)
  @IsEmail()
  email: string;

  @MinLength(5)
  @MaxLength(1024)
  password: string;
}
