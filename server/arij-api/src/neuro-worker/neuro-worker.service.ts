import { Injectable } from '@nestjs/common';
import { NeuroWorkerContext } from '@arij/common';
import { NeuroWorker } from './schema/neuro-worker.schema';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NeuroWorkerService {
//	constructor(@InjectRepository(NeuroWorker) private nwRepo: Repository<NeuroWorker>,) {}
}