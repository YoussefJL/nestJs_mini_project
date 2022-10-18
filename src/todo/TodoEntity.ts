import{TodoStatusEnum} from "./enum";
import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn } from 'typeorm';
import { CUD } from "./CUD";
@Entity('todo')
export class TodoEntity extends CUD {

  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  status: TodoStatusEnum;

  @Column()
  name: string;

  @Column()
  description: string;

  // @CreateDateColumn({update:false})
  // createdAt: Date;
  //
  // @UpdateDateColumn()
  // updatedAt: Date;
  //
  // @DeleteDateColumn()
  // deletedAt: Date;

}
