import { MinLength, MaxLength, IsEmail } from 'class-validator';

export class CreateForgotPasswordDto {
  @MinLength(5)
  @MaxLength(255)
  @IsEmail()
  readonly email: string;
}
