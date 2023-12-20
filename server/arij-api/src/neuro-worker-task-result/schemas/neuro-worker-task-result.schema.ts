import { Field, ID, ObjectType, registerEnumType, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import * as models from '@arij/common';

export type NeuroWorkerTaskResultDocument = NeuroWorkerTaskResult & Document;

registerEnumType(models.NeuroWorkerTaskStatus, {
  name: 'NeuroWorkerTaskStatus',
});

@Schema()
@ObjectType()
@InputType('NeuroWorkerTaskResultInput')
export class NeuroWorkerTaskResult implements models.NeuroWorkerTaskResultModel {
  @Field(() => ID)
  public _id: string;

  @Field()
  @Prop({ type: Date, default: Date.now })
  public createdDate: Date;

  @Field()
  @Prop({ type: Date, default: Date.now })
  public lastModifiedDate: Date;

  @Field()
  @Prop({ type: String })
  public neuroWorkerID: string;

  @Field()
  @Prop({ type: String })
  public taskid: string;

  @Field()
  @Prop({ type: String })
  public input: string;

  @Field()
  @Prop({ type: String })
  public output: string;

  @Field(() => models.NeuroWorkerTaskStatus)
  @Prop({ enum: models.NeuroWorkerTaskStatus })
  public status: models.NeuroWorkerTaskStatus;

  @Field()
  @Prop({ type: Number })
  public inputTokens: number;

  @Field()
  @Prop({ type: Number })
  public outputTokens: number;

  @Field()
  @Prop({ type: Number })
  public price: number;
}

export const NeuroWorkerTaskResultSchema = SchemaFactory.createForClass(NeuroWorkerTaskResult);
