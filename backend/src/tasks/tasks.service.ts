import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async getTasks(task: Task): Promise<Task[]> {
    return await this.tasksRepository.find();
  }

  async getTask(_id: number): Promise<Task[]> {
    return await this.tasksRepository.find({
      select: ['taskTitle', 'status'],
      where: [{ id: _id }],
    });
  }

  async createTask(task: Task): Promise<Task> {
    return this.tasksRepository.save(task);
  }

  async updateTask(task: Task) {
    this.tasksRepository.save(task);
  }
}
