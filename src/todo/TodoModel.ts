import {TodoStatusEnum} from "./enum";
import {v4 as uuidv4} from "uuid"
export class TodoModule{
  id:string  = uuidv4();
  name:string;
  description:string;
  dateDeCreation: string =  Date();
  status:TodoStatusEnum = TodoStatusEnum.waiting;
}
