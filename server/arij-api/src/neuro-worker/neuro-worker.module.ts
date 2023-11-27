import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NeuroWorkerResolver } from './neuro-worker.resolver';
import { NeuroWorkerService } from './neuro-worker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NeuroWorker } from './schema/neuro-worker.schema';

@Module({
	imports: [
		ConfigModule,
		TypeOrmModule.forFeature([NeuroWorker]),
	],
	providers: [NeuroWorkerResolver, NeuroWorkerService],
})
export class NeuroWorkerModule {}