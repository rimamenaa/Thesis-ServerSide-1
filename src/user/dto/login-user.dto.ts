import { MinLength, MaxLength, IsEmail } from 'class-validator';

export class LoginUserDto {
  @MinLength(5)
  @MaxLength(255)
  @IsEmail()
  readonly email: string;

  @MinLength(5)
  @MaxLength(1024)
  readonly password: string;
}
