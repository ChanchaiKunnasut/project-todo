import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get(':id')
  getTaskById(@Param() param) {
    return this.service.getTaskById(param.id);
  }

  @Get()
  getTasks() {
    return this.service.getTasks();
  }

  @Post()
  create(@Body() task: Task) {
    return this.service.createTask(task);
  }

  @Put()
  update(@Body() task: Task) {
    return this.service.updateTask(task);
  }
}
