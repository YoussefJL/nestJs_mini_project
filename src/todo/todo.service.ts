import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { todoDTO } from './DTO/todoDTO';
import {TodoEntity}from './TodoEntity';
import {updateDTO}from './DTO/updateDTO';

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

}
