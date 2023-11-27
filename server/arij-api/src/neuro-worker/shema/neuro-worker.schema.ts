import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import {
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as models from '@arij/common';
import { from } from 'rxjs';
import { Document } from 'mongoose';

@Schema()
export class NeuroWorker extends Document {
	@Prop({ type: 'uuid' })
  	public _id: string;

  	@Prop({ type: Date, default: Date.now })
  	public createdDate: Date;

  	@Prop({ type: Date, default: Date.now })
  	public lastModifiedDate: Date;

  	@Prop({ type: 'uuid', ref: 'NeuroWorker', autopopulate: true })
  	public createdBy: NeuroWorker;

  	@Prop({ type: 'uuid', ref: 'NeuroWorker', autopopulate: true })
  	public lastModifiedBy: NeuroWorker;

  	@Prop()
  	public name: string;

  	@Prop()
  	public id: number;
}

export const NeuroWorkerSchema = SchemaFactory.createForClass(NeuroWorker);