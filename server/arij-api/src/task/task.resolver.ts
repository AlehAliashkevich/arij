import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/user.decorator';
import { UserContext } from '@arij/common';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import { graphql } from 'graphql';
import { CreateTaskArgs } from './task.args';

@Resolver()
export class TaskResolver {
	constructor(private taskService: TaskService) {}

	@Mutation(() => Task)
	public createTask(@Args() args: CreateTaskArgs ): Promise<Task>{
		return this.taskService.createTask(args.task);
	}

	@Query(() => [Task], { name: 'tasks' })
	public getTasks(@CurrentUser() context: UserContext): Promise<Task[]> {
		return this.taskService.getTasks(context);
	}

	@Query(() => [Task], { name: 'getTasks' })
	public getTaskByld(@CurrentUser('id', { type: () => [Intl] }) id: string): Promise<Task[]> {
		return this.taskService.getTaskByld(id);
	}
}
