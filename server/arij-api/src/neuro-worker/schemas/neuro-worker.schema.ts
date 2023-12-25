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
  @Field(() => ID, {nullable: true })
  public _id: string;

  @Field({nullable: true })
  @Prop({ type: Date, default: Date.now })
  public createdDate: Date;

  @Field({nullable: true })
  @Prop({ type: Date, default: Date.now })
  public lastModifiedDate: Date;

  @Field()
  @Prop()
  public name: string;

  @Field()
  @Prop()
  public template: string;

  @Field({nullable: true })
  @Prop()
	public sizeTemplate: number;

  @Field({nullable: true })
  @Prop()
	public sizeInput: number;

  @Field({nullable: true })
  @Prop()
	public sizeOutput: number;

  @Field(() => models.NeuroModel, {nullable: true })
  @Prop({ enum: models.NeuroModel })
	public model: models.NeuroModel;
}

export const NeuroWorkerSchema = SchemaFactory.createForClass(NeuroWorker);