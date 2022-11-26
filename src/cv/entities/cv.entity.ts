import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable } from 'typeorm';
import { Skill } from 'src/skills/entities/skill.entity';

@Entity('cv')
export class CV{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  firstname: string;

  @Column()
  age: number;

  @Column()
  cin: number;

  @Column()
  job: string;

  @Column()
  path: string;


  @ManyToOne(() => User, user => user.cvs)
  creator: User;

  @ManyToMany(() => Skill, skill => skill.cvs)
  @JoinTable({
      name: 'cv_and_skills',
      joinColumn: {
        name: 'cv',
        referencedColumnName: 'id',
      },
      inverseJoinColumn: {
        name: 'skill',
        referencedColumnName: 'id',
      },
  })
    skills: Skill[];

}
