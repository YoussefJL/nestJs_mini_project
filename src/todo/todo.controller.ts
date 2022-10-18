import { Controller, Get, Post,Body,Delete,Param,Put,Patch} from '@nestjs/common';
import { TodoModule} from "./TodoModel";
import { todoDTO } from "./DTO/todoDTO";
import { updateDTO } from "./DTO/updateDTO";
import { TodoService } from './todo.service';
@Controller('todo')
export class TodoController {
  constructor (private todoService:TodoService){

  }
  /* private todos = []; */
  /* @Get()
  getTodos(){
    return this.todos;
  } */

  @Get()
  getTodobD(){
    return this.todoService.getTodos();
  }
  @Get(':id')
  getTodoElement(@Param("id") id){
    return this.todoService.getTodo(id);
  }

  /* @Get(':id')
  getTodo(@Param('id') id) {
  return this.todos.find((todo) => todo.id == id);
  }
 */

  /* @Post()
  postTodo(@Body() todoDto: todoDTO) {
    const todo = new TodoModule();
    todo.name = todoDto.name;
    todo.description = todoDto.description;
    this.todos.push(todo);
    return todo;
  } */

  @Post('dbAdd')
    async addTodo(
      @Body() Todo:todoDTO
    ){
      return await this.todoService.addTodo(Todo);
    }
  

//   @Post()
//   postTodo(
//   @Body('name') name: string,
//   @Body('description') description: string
// ){
//     const todo = new TodoModule();
//     todo.name= name;
//     todo.description = description;
//     this.todos.push(todo);
//
//     return "Added succefully";
//   }

  /* @Delete(':id')
  deleteTodo(@Param('id') id) {
    this.todos = this.todos.filter((todo) => todo.id != id);

    return 'Data deleted successfully';
  } */

  /* @Put(':id')
  updateTodo(@Param('id') id, @Body() updateDTO: updateDTO) {
    const todo = this.todos.find((todo) => todo.id == id);

    if (updateDTO.name) {
      todo.name = updateDTO.name;
    }
    if (updateDTO.description) {
      todo.description = updateDTO.description;
    }
    if (updateDTO.status) {
      todo.status = updateDTO.status;
    }
    return (`The Todo with the id ${id} is updated successfully.`);
  } */

  @Put(':id')
  updateTodo(@Param('id') id, @Body() updateDTO: updateDTO) {
    return this.todoService.updateTodo(id,updateDTO);

  }

  @Delete(':id')
  deleteTodo(@Param("id") id){
    return this.todoService.deleteTodo(id);
  }

  @Delete('softdelete/:id')
  deleteTodoSoft(@Param('id') id){
    return this.todoService.softDeleteTodo(id);
  }

  @Post('restore/:id')
  restoreSection(@Param('id') id){
    return this.todoService.restoreSection(id);
  }



}
