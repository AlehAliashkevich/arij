import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/user.decorator';
import { UserContext } from '@arij/common';
import { NeuroWorkerService } from './neuro-worker.service';
import { NeuroWorker, NeuroWorkerDocument, NeuroWorkerSchema } from './schemas/neuro-worker.schema';
import { CreateNeuroWorkerArgs, UpdateNeuroWorkerArgs } from './neuro-worker.args';


@Resolver(() => NeuroWorker)
export class NeuroWorkerResolver {
  constructor(public neuroWorkerService: NeuroWorkerService) {}

  @Mutation(() => NeuroWorker)
  public async createNeuroWorker(@Args() args: CreateNeuroWorkerArgs ): Promise<NeuroWorker> {
    return this.neuroWorkerService.createNeuroWorker(args.neuroWorker);
  }

  @Mutation(() => NeuroWorker)
  public async updateNeuroWorker(@Args() args: UpdateNeuroWorkerArgs): Promise<NeuroWorker> {
    return this.neuroWorkerService.updateNeuroWorker(args.neuroWorker);
  }

  @Query(() => [NeuroWorker], { name: 'getNeuroWorkers' })
  async getNeuroWorkers(@CurrentUser() context: UserContext): Promise<NeuroWorker[]> {
    return this.neuroWorkerService.getNeuroWorkers(context);
  }

  @Query(() => NeuroWorker, { name: 'getNeuroWorkerById' })
  async getNeuroWorkerById(@Args('id') id: string): Promise<NeuroWorker | null> {
    return this.neuroWorkerService.getNeuroWorkerById(id);
  }
}