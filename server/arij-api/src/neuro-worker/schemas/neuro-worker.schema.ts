import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { User } from '@arij/common';
import * as mongoose from 'mongoose';

@Schema()
@ObjectType()
export class NeuroWorker extends Document {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ type: Date, default: Date.now })
  createdDate: Date;

  @Field()
  @Prop({ type: Date, default: Date.now })
  lastModifiedDate: Date;

  @Field(() => ID, { nullable: true })
  @Prop({ type: Types.ObjectId, ref: 'User', autopopulate: true })
  createdBy: User['_id'];

  @Field(() => ID, { nullable: true })
  @Prop({ type: Types.ObjectId, ref: 'User', autopopulate: true })
  lastModifiedBy: User['_id'];

  @Field()
  @Prop()
  name: string;

  @Field(() => ID)
  @Prop()
  id: string;
}

export const NeuroWorkerSchema = SchemaFactory.createForClass(NeuroWorker);
export const NeuroWorkerModel = mongoose.model('NeuroWorker', NeuroWorkerSchema);

export interface NeuroWorker extends Document {
  _id: string;
  createdDate: Date;
  lastModifiedDate: Date;
  createdBy: User['_id'];
  lastModifiedBy: User['_id'];
  name: string;
  id: string;
}