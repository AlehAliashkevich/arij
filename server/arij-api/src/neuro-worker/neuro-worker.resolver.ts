import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/user.decorator';
import { UserContext } from '@arij/common';
import { NeuroWorkerService } from './neuro-worker.service';
import { NeuroWorker } from './schema/neuro-worker.schema';

@Resolver()
export class NeuroWorkerResolver {
	constructor(private nwService: NeuroWorkerService) {}
}