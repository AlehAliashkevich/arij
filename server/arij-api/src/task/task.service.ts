import { Injectable } from '@nestjs/common';
import { TaskContext } from '@arij/common';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
    [x: string]: any;
	constructor(@InjectRepository(Task) private taskRepo: Repository<Task>,) {}

	public async getTasks(context: TaskContext): Promise<Task[]> {
		return this.taskRepo.findBy({});
	}
}