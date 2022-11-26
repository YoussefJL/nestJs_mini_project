import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SkillsService } from '../skills/skills.service';
import { Skill } from '../skills/entities/skill.entity';
import { randSkill, randUserName, randEmail, randPassword, randNumber, randJobTitle, randFirstName, randLastName, randFilePath } from '@ngneat/falso';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { CV } from '../cv/entities/cv.entity';
import { CvService } from '../cv/cv.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const skillService = app.get(SkillsService);
    const userService = app.get(UserService);
    const cvService = app.get(CvService);

    for (let i = 0; i < 50; i++) {
        const skill = new Skill();
        skill.designation = randSkill();
        await skillService.create(skill);

        const user = new User();
        user.username = randUserName();
        user.email = randEmail();
        user.password = randPassword();
        await userService.create(user);
    }
    for (let i = 0; i < 50; i++) {
        const cv = new CV();
        cv.age = randNumber();
        cv.cin = randNumber();
        cv.job = randJobTitle();
        cv.firstname = randFirstName();
        cv.path = randFilePath();
        cv.name = randLastName();
        const randId = Math.floor(Math.random() * 48) + 1;
        cv.creator.id = Number(userService.findOne(randId));
        const skills = [];
        for (let j = 0; j < 3; j++) {
            const randId = Math.floor(Math.random() * 48) + 1;
            const skill = skillService.findOne(randId);
            if (!skills.includes(skill)) {
                skills.push(skill);
            }
        }
        cv.skills = skills;
        cvService.create(cv);
    }
    await app.close();
}

bootstrap();