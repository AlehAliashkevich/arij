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

//добавіть graphql

@Schema()
export class NeuroWorker extends Document {
	@Field({ nullable: true })
	@Prop({ type: 'uuid' })
  	public _id: string;

	@Field({ nullable: true })
  	@Prop({ type: Date, default: Date.now })
  	public createdDate: Date;

	@Field({ nullable: true })
  	@Prop({ type: Date, default: Date.now })
  	public lastModifiedDate: Date;

	@Field({ nullable: true })
  	@Prop({ type: 'uuid', ref: 'NeuroWorker', autopopulate: true })
  	public createdBy: NeuroWorker;

  	@Field({ nullable: true })
	@Prop({ type: 'uuid', ref: 'NeuroWorker', autopopulate: true })
  	public lastModifiedBy: NeuroWorker;

  	@Field({ nullable: true })
	@Prop()
  	public name: string;

  	@Field({ nullable: true })
	@Prop()
  	public id: number;
}

export const NeuroWorkerSchema = SchemaFactory.createForClass(NeuroWorker);