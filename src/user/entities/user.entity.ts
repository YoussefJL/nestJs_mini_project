import { CV } from "src/cv/entities/cv.entity";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import { OneToMany } from "typeorm/decorator/relations/OneToMany";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => CV, (cv) => cv.creator, { eager: true, cascade: true })
    cvs: CV[];
}
