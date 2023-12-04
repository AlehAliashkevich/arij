import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/user.decorator';
import { UserContext } from '@arij/common';
import { NeuroWorkerService } from './neuro-worker.service';
import { NeuroWorker, NeuroWorkerDocument, NeuroWorkerSchema } from './schemas/neuro-worker.schema';
import { CreateNeuroWorkerArgs } from './neuro-worker.args';


@Resolver(() => NeuroWorker)
export class NeuroWorkerResolver {
  constructor(public neuroWorkerService: NeuroWorkerService) {}

  @Mutation(() => NeuroWorker)
  public async createNeuroWorker(@Args() args: CreateNeuroWorkerArgs ): Promise<NeuroWorker> {
    return this.neuroWorkerService.createNeuroWorker(args.neuroWorker);
  }

  /*@Mutation(() => NeuroWorker)
  async updateNeuroWorker(
    @Args('id') id: string,
    @Args('name') name: string,
  ): Promise<NeuroWorker | null> {
    return this.neuroWorkerService.updateNeuroWorker(id, { name } as Partial<typeof NeuroWorkerSchema>);
  }*/

  @Query(() => [NeuroWorker], { name: 'getNeuroWorkers' })
  async getNeuroWorkers(@CurrentUser() context: UserContext): Promise<NeuroWorker[]> {
    return this.neuroWorkerService.getNeuroWorkers(context);
  }

  @Query(() => NeuroWorker, { name: 'getNeuroWorkerById' })
  async getNeuroWorkerById(@Args('id') id: string): Promise<NeuroWorker | null> {
    return this.neuroWorkerService.getNeuroWorkerById(id);
  }
}