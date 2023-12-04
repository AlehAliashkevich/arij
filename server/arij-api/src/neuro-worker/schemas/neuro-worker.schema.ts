import { Field, ID, ObjectType, registerEnumType, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import * as models from '@arij/common';

export type NeuroWorkerDocument = NeuroWorker & Document;
registerEnumType(models.NeuroModel, {
  name: 'NeuroModel',
 });

@Schema()
@ObjectType()
@InputType('NeuroWorkerInput')
export class NeuroWorker implements models.NeuroWorkerModel {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ type: Date, default: Date.now })
  public createdDate: Date;

  @Field()
  @Prop({ type: Date, default: Date.now })
  public lastModifiedDate: Date;

  @Field()
  @Prop()
  public name: string;

  @Field()
  @Prop()
  public template: string;

  @Field()
  @Prop()
	public sizeTemplate: number;

  @Field()
  @Prop()
	public sizeInput: number;

  @Field()
  @Prop()
	public sizeOutput: number;

  @Field(() => models.NeuroModel)
  @Prop({ enum: models.NeuroModel })
	public model: models.NeuroModel;
}

export const NeuroWorkerSchema = SchemaFactory.createForClass(NeuroWorker);