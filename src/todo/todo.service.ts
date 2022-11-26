import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { todoDTO } from './DTO/todoDTO';
import {TodoEntity}from './TodoEntity';
import {updateDTO}from './DTO/updateDTO';
import { TodoStatusEnum } from './enum';

@Injectable()
export class TodoService {
    constructor (
        @InjectRepository(TodoEntity)
        private todoRepository:Repository<TodoEntity>
    ) {
        
    }

    async addTodo(Todo:todoDTO) {
        return await this.todoRepository.save(Todo);
    }
    
    async updateTodo(id:number,Todo:updateDTO) {
        return await this.todoRepository.update(id,Todo);
    
    }

    async deleteTodo(id:number){
        return await this.todoRepository.delete(id);
    }

    async softDeleteTodo(id:number){
        return await this.todoRepository.softDelete(id);
    }
    async restoreSection(id:number){
        return await this.todoRepository.restore(id);
    }

    async getTodos(){
        return this.todoRepository.find();
    }

    async getTodo(id:number){
        return this.todoRepository.findOneBy({id});
    }

    async countByStatus() {
        return ('actif :' +
          (await this.todoRepository.countBy({ status: TodoStatusEnum.actif })) +
          ' waiting : ' +
          (await this.todoRepository.countBy({ status: TodoStatusEnum.waiting })) +
          ' done : ' +
          (await this.todoRepository.countBy({ status: TodoStatusEnum.done })));
      }

      async getTodoByStatusAndData(statusParam, data): Promise<TodoEntity[]> {
        return await this.todoRepository.find({
          where: [
            {
              name: Like(`%${data}%`),
            },
            {
              description: Like(`%${data}%`),
              status: statusParam,
            },
          ],
        });
      }

      async getTodoById(id: number): Promise<TodoEntity[]> {
        const todo = await this.todoRepository.findBy({ id: id });
        if(!todo){
            throw new NotFoundException();
        }
        return todo;
      }
      async getTodov3(statusParam, data): Promise<TodoEntity[]> {
        return await this.todoRepository.find({
          where: [
            {
              status: statusParam,
            },
            {
              name: Like(`%${data}%`),
            },
            {
              description: Like(`%${data}%`),
            },
          ],
        });
      }

      async paginatedGetTodos(param): Promise<TodoEntity[]> {
        return await this.todoRepository.find({
          skip: (param.page - 1) * param.take,
          take: param.take,
        });
      }
}
