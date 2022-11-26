import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { CV } from "src/cv/entities/cv.entity";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string

    cvs: CV[]

}
