import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { SkillsController } from './skills/skills.controller';
import { SkillsModule } from './skills/skills.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo/TodoEntity';


@Module({
  imports: [PremierModule,  TodoModule, SkillsModule,TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [TodoEntity],
      synchronize: true,
    })],
  controllers: [AppController, SkillsController],
  providers: [AppService],
})
export class AppModule {}
