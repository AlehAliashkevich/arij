import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/user.decorator';
import { UserContext } from '@arij/common';
import { NeuroWorkerTaskResult, NeuroWorkerTaskResultDocument, NeuroWorkerTaskResultSchema } from './schemas/neuro-worker-task-result.schema';
import { NeuroWorkerTaskResultService } from './neuro-worker-task-result.service';


@Resolver(() => NeuroWorkerTaskResult)
export class NeuroWorkerTaskResultResolver {
  constructor(public neuroWorkerService: NeuroWorkerTaskResultService) {}
}