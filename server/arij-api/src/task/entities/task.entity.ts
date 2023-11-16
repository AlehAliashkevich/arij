import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import {
	Column,
	Entity,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import * as models from '@arij/common';

@Entity()
@ObjectType()
export class Task implements models.Task<string> {
	// system fields
	@Field({ nullable: true })
	@PrimaryGeneratedColumn('uuid')
	public _id: string;

	@Field({ nullable: true })
	@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: true, update: false })
	public createdDate: Date;

	@Field({ nullable: true })
	@UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: true })
	public lastModifiedDate: Date;

	@Field(() => Task, { nullable: true })
	@ManyToOne(() => Task, task => task.createdBy, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'createdBy_id' })
	public createdBy: Task;

	@Field(() => Task, { nullable: true })
	@ManyToOne(() => Task, task => task.lastModifiedBy, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'lastModifiedBy_id' })
	public lastModifiedBy: Task;

	@Field({ nullable: true })
	@Column({ nullable: true })
	public name: string;

	@Field({ nullable: true })
	@Column()
	public description: string;

	
}

@InputType()
export class UserInput extends PartialType(Task, InputType) {}
