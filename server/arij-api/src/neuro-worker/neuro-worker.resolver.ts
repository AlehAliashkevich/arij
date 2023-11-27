import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/user.decorator';
import { UserContext } from '@arij/common';
import { NeuroWorkerService } from './neuro-worker.service';
import { NeuroWorker } from './entities/nw.entity';

@Resolver()
export class NeuroWorkerResolver {
	constructor(private nwService: NeuroWorkerService) {}
}