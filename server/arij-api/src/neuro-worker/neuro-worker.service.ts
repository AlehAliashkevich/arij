import { Injectable } from '@nestjs/common';
import { UserContext } from '@arij/common';
import { NeuroWorker, NeuroWorkerDocument, NeuroWorkerSchema } from './schemas/neuro-worker.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NeuroWorkerService {
  constructor(@InjectModel('NeuroWorker') private readonly neuroWorkerModel: Model<NeuroWorkerDocument>) {}

  async createNeuroWorker(neuroWorker: NeuroWorker ): Promise<NeuroWorker> {
    /*neuroWorker._id = new Types.ObjectId();*/
    neuroWorker.createdDate = new Date();
    await this.neuroWorkerModel.bulkWrite(
      [{
        insertOne: {
        document: neuroWorker}
      }]
     );
    return neuroWorker;
  }

  async updateNeuroWorker(updateData: NeuroWorker): Promise<NeuroWorker> {
    await this.neuroWorkerModel.updateOne({_id: updateData._id }, updateData);
    return updateData;
  }

  async getNeuroWorkers(context: UserContext): Promise<NeuroWorker[]> {
    return this.neuroWorkerModel.find() as unknown as NeuroWorker[];
  }

  async getNeuroWorkerById(id: string): Promise<NeuroWorker | null> {
    return this.neuroWorkerModel.findById(id) as unknown as NeuroWorker | null;
  }
}