import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import { NeuroWorkerTaskResultResolver } from './neuro-worker-task-result.resolver';
import { NeuroWorkerTaskResultService } from './neuro-worker-task-result.service';
import { NeuroWorkerTaskResultSchema } from './schemas/neuro-worker-task-result.schema';
import { NeuroWorkerTaskResult } from './schemas/neuro-worker-task-result.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: NeuroWorkerTaskResult.name, schema: NeuroWorkerTaskResultSchema },
		]),
	],
	providers: [NeuroWorkerTaskResultResolver, NeuroWorkerTaskResultService]
})
export class NeuroWorkerTaskResultModule {}