import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import { NeuroWorkerResolver } from './neuro-worker.resolver';
import { NeuroWorkerService } from './neuro-worker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NeuroWorker, NeuroWorkerSchema } from './schemas/neuro-worker.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: NeuroWorker.name, schema: NeuroWorkerSchema },
		]),
	],
	providers: [NeuroWorkerResolver, NeuroWorkerService]
})
export class NeuroWorkerModule {}