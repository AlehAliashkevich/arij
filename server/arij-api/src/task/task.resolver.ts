import { Query, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/user.decorator';
import { TaskContext } from '@arij/common';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import { graphql } from 'graphql';

@Resolver()
export class TaskResolver {
	constructor(private taskService: TaskService) {}

	@Mutation(() => Task)
	public createTask(@CurrentUser('input') input: Partial<Task>): Promise<Task>{
		return this.taskService.createTask(input);
	}

	@Query(() => [Task], { name: 'tasks' })
	public getTasks(@CurrentUser() context: TaskContext): Promise<Task[]> {
		return this.taskService.getTasks(context);
	}

	@Query(() => [Task], { name: 'getTasks' })
	public getTaskByld(@CurrentUser('id', { type: () => [Intl] }) id: string): Promise<Task[]> {
		return this.taskService.getTaskByld(id);
	}
}
