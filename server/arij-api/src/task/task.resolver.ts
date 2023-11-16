import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/user.decorator';
import { TaskContext } from '@arij/common';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';

@Resolver()
export class TaskResolver {
	constructor(private taskService: TaskService) {}

	@Query(() => [Task], { name: 'tasks' })
	public getTasks(@CurrentTask() context: TaskContext): Promise<Task[]> {
		return this.taskService.getTasks(context);
	}
}

function CurrentTask(): (target: TaskResolver, propertyKey: "getTasks", parameterIndex: 0) => void {
    throw new Error('Function not implemented.');
}
