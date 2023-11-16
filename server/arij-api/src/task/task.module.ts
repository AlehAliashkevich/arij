import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Module({
	imports: [
		ConfigModule,
		TypeOrmModule.forFeature([Task]),
	],
	providers: [TaskResolver, TaskService],
})
export class TaskModule {}