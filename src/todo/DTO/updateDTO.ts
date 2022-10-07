import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TodoStatusEnum } from '../enum';

export class updateDTO {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}
