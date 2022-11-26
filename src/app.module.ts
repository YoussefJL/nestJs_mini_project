import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { SkillsController } from './skills/skills.controller';
import { UserModule } from './user/user.module';
import { CvModule } from './cv/cv.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo/TodoEntity';
import { SkillsModule } from './skills/skills.module';
import { CV } from './cv/entities/cv.entity';
import { Skill } from './skills/entities/skill.entity';
import { User } from './user/entities/user.entity';


@Module({
  imports: [PremierModule,  TodoModule, SkillsModule,TypeOrmModule.forRoot({
    
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [TodoEntity, CV, Skill, User],
      synchronize: true,

    }), CvModule, UserModule],
  controllers: [AppController, SkillsController],
  providers: [AppService],
})
export class AppModule {}
