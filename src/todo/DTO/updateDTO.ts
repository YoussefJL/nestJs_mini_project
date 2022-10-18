import { IsEnum, IsNotEmpty, IsOptional, IsString,MinLength,MaxLength } from 'class-validator';
import { TodoStatusEnum } from '../enum';

export class updateDTO {
  @IsOptional()
  @IsString()
  @MinLength(3,{
    message: "MinLength of name is 3 carac"
  })
  @IsOptional()
  @MaxLength(10,{
    message: "Max MaxLength of name is 10 carac"
  })
  name: string;

  @IsOptional()
  @IsString()
  @MinLength(10,{
  message:"description should be more than 10 carac"
  })
  description: string;

  @IsOptional()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}
