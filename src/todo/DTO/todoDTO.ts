import { IsNotEmpty, IsString,MinLength,MaxLength,ValidationArguments } from 'class-validator';

export class todoDTO {
  @IsString()
  // @IsNotEmpty()
  @MinLength(3,{
    message: (validationData: ValidationArguments) => {
    return ` ${validationData.property} should be longer,the minimum number of caracters is ${validationData.constraints[0]}`
    }
  })
  @MaxLength(10,{
    message: (validationData: ValidationArguments) => {
    return ` ${validationData.property} should be shorter,the maximum number of caracters is ${validationData.constraints[0]}`
    }
  })
  name: string;

  @IsString()
  // @IsNotEmpty()
  @MinLength(10, {
  message: (validationData: ValidationArguments) => {
  return ` ${validationData.property} should be longer,the minimum number of caracters is ${validationData.constraints[0]}`
  }
  })
  description: string;


}
