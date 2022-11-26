import { CV } from "src/cv/entities/cv.entity";
import { ManyToMany } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity('skill')
export class Skill {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    designation: string;

    @ManyToMany(() => CV, cv => cv.skills)
    cvs: CV[];

}