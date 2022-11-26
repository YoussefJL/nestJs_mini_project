import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Skill } from "src/skills/entities/skill.entity";
export class CreateCvDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    firstname: string;
  
    @IsNotEmpty()
    @IsNumber()
    age: number;
  
    @IsNumber()
    cin: number;
  
    @IsString()
    job: string;
  
    @IsString()
    path: string;

    skills: Skill[]
}
