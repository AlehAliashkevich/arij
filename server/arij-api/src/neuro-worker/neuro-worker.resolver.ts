import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/user.decorator';
import { UserContext } from '@arij/common';
import { NeuroWorkerService } from './neuro-worker.service';
import { NeuroWorker, NeuroWorkerSchema } from './schemas/neuro-worker.schema';
import { Document } from 'mongoose';

@Resolver(() => NeuroWorkerSchema)
export class NeuroWorkerResolver {
  constructor(public neuroWorkerService: NeuroWorkerService) {}

  @Mutation(() => NeuroWorkerSchema)
  async createNeuroWorker(@Args('createInput') createInput: Partial<typeof NeuroWorkerSchema>): Promise<NeuroWorker & Document> {
    return this.neuroWorkerService.createNeuroWorker(createInput);
  }

  @Mutation(() => NeuroWorkerSchema)
  async updateNeuroWorker(
    @Args('id') id: string,
    @Args('name') name: string,
  ): Promise<NeuroWorker | null> {
    return this.neuroWorkerService.updateNeuroWorker(id, { name } as Partial<typeof NeuroWorkerSchema>);
  }

  @Query(() => [NeuroWorkerSchema], { name: 'getNeuroWorkers' })
  async getNeuroWorkers(@CurrentUser() context: UserContext): Promise<NeuroWorker[]> {
    return this.neuroWorkerService.getNeuroWorkers(context);
  }

  @Query(() => [NeuroWorkerSchema], { name: 'getNeuroWorkerById' })
  async getNeuroWorkerById(@Args('id') id: string): Promise<NeuroWorker | null> {
    return this.neuroWorkerService.getNeuroWorkerById(id);
  }
}