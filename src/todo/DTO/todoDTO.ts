import { IsNotEmpty, IsString } from 'class-validator';

export class todoDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
