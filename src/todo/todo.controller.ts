import { Controller, Get, Post,Body,Delete,Param,Put,Patch} from '@nestjs/common';
import { todoDTO } from "./DTO/todoDTO";
import { updateDTO } from "./DTO/updateDTO";
import { TodoService } from './todo.service';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { TodoEntity } from './TodoEntity';

@Controller('todo')
export class TodoController {
  constructor (private todoService:TodoService){

  }
  /* private todos = []; */
  /* @Get()
  getTodos(){
    return this.todos;
  } */




  
  //return all the todos
  @Get('alltodos')
  getTodobD(){
    return this.todoService.getTodos();
  }

  //return a specific todo
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



  //add a todo
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




  //update a todo
  @Put(':id')
  updateTodo(@Param('id') id, @Body() updateDTO: updateDTO) {
    return this.todoService.updateTodo(id,updateDTO);

  }

  //delete a todo
  @Delete(':id')
  deleteTodo(@Param("id") id){
    return this.todoService.deleteTodo(id);
  }

  //soft delete for a todo
  @Delete('softdelete/:id')
  deleteTodoSoft(@Param('id') id){
    return this.todoService.softDeleteTodo(id);
  }

  //restore a todo
  @Post('restore/:id')
  restoreSection(@Param('id') id){
    return this.todoService.restoreSection(id);
  }

  //count by status
  @Get()
  async CountByStatut() {
    {
      return await this.todoService.countByStatus();
    }
  }

  //return todo by the id
  @Get('todoById/:id')
  async findtodoById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TodoEntity[]> {
    {
      return await this.todoService.getTodoById(id);
    }
  }
}
