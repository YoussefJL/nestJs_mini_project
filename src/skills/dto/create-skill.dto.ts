import { IsString } from "class-validator";
import { CV } from "src/cv/entities/cv.entity";

export class CreateSkillDto {
    @IsString()
    designation: string;

    cvs: CV[];
}
