import { Injectable } from '@nestjs/common';
import { UserContext } from '@arij/common';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
    [x: string]: any;
	constructor(@InjectRepository(Task) private taskRepo: Repository<Task>,) {}

	public async getTasks(context: UserContext): Promise<Task[]> {
		return this.taskRepo.findBy({});
	}

	public async getTaskByld(id: string): Promise<Task[]> {
		return this.taskRepo.findBy(id);
	}

	public async createTask(taskData: Partial<Task>): Promise<Task> {
		const newTask = this.taskRepo.create(taskData);
		return this.taskRepo.save(newTask);
	}
}