import { Injectable } from '@nestjs/common';
import { UserContext } from '@arij/common';
import { NeuroWorker } from './schemas/neuro-worker.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NeuroWorkerService {
	constructor(@InjectModel(NeuroWorker.name) private itemModel: Model<NeuroWorker>) {}
}