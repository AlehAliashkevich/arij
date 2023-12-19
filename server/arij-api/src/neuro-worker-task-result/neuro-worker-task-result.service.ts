import { Injectable } from '@nestjs/common';
import { UserContext } from '@arij/common';
import { NeuroWorkerTaskResult, NeuroWorkerTaskResultDocument, NeuroWorkerTaskResultSchema } from './schemas/neuro-worker-task-result.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NeuroWorkerTaskResultService {
  constructor(@InjectModel('NeuroWorkerTaskResult') private readonly neuroWorkerModelTaskResult: Model<NeuroWorkerTaskResultDocument>) {}
}