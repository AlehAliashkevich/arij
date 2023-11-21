import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/user.decorator';
import { TaskContext } from '@arij/common';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';

@Resolver()
export class TaskResolver {
	constructor(private taskService: TaskService) {}

	@Query(() => [Task], { name: 'tasks' })
	public getTasks(@CurrentUser() context: TaskContext): Promise<Task[]> {
		return this.taskService.getTasks(context);
	}
}
