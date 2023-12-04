import { ArgsType, Field } from '@nestjs/graphql';
import { NeuroWorker } from './schemas/neuro-worker.schema';


@ArgsType()
export class CreateNeuroWorkerArgs {
 @Field(() => NeuroWorker, { nullable: false })
 public neuroWorker: NeuroWorker;
}