import { ArgsType, Field } from '@nestjs/graphql';
import { Task } from './entities/task.entity';

@ArgsType()
export class CreateTaskArgs {
 @Field(() => Task, { nullable: false })
 public task: Task;
}