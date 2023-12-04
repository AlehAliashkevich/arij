import { Injectable } from '@nestjs/common';
import { UserContext } from '@arij/common';
import { NeuroWorker, NeuroWorkerSchema } from './schemas/neuro-worker.schema';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NeuroWorkerService {
  constructor(@InjectModel('NeuroWorker') private readonly neuroWorkerModel: Model<NeuroWorker & Document>) {}

  async createNeuroWorker(createInput: Partial<typeof NeuroWorkerSchema>): Promise<NeuroWorker & Document> {
    const createdNeuroWorker = new this.neuroWorkerModel(createInput);
    return await createdNeuroWorker.save();
  }

  async updateNeuroWorker(id: string, updateData: Partial<typeof NeuroWorkerSchema>): Promise<NeuroWorker | null> {
    return this.neuroWorkerModel.findByIdAndUpdate(id, updateData, { new: true }) as unknown as NeuroWorker | null;
  }

  async getNeuroWorkers(context: UserContext): Promise<NeuroWorker[]> {
    return this.neuroWorkerModel.find() as unknown as NeuroWorker[];
  }

  async getNeuroWorkerById(id: string): Promise<NeuroWorker | null> {
    return this.neuroWorkerModel.findById(id) as unknown as NeuroWorker | null;
  }
}