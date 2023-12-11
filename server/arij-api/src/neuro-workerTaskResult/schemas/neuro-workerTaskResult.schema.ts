import { Field, ID, ObjectType, registerEnumType, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import * as models from '@arij/common';

export type NeuroWorkerTaskResultDocument = NeuroWorkerTaskResult & Document;

registerEnumType(models.Status, {
  name: 'Status',
});

@Schema()
@ObjectType()
@InputType('NeuroWorkerTaskResultInput')
export class NeuroWorkerTaskResult implements models.NeuroWorkerModel {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ type: Date, default: Date.now })
  public createdDate: Date;

  @Field()
  @Prop({ type: Date, default: Date.now })
  public lastModifiedDate: Date;

  @Field()
  @Prop({ type: String })
  neuro_workerID: string;

  @Field()
  @Prop({ type: String })
  taskid: string;

  @Field()
  @Prop({ type: String })
  input: string;

  @Field()
  @Prop({ type: String })
  output: string;

  @Field(() => models.Status)
  @Prop({ enum: models.Status })
  status: models.Status;

  @Field()
  @Prop({ type: Number })
  input_tokens: number;

  @Field()
  @Prop({ type: Number })
  output_tokens: number;

  @Field()
  @Prop({ type: Number })
  price: number;
}

export const NeuroWorkerTaskResultSchema = SchemaFactory.createForClass(NeuroWorkerTaskResult);
