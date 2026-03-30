import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  course: string;
}