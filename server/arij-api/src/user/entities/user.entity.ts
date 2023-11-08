import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import {
	Column,
	Entity,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
} from 'typeorm';
import * as models from '@arij/common';

@Entity()
@ObjectType()
export class User implements models.User<string> {
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

	@Field({ nullable: true })
	@Column({ update: false })
	public createdBy: User;

	@Field({ nullable: true })
	@Column()
	public lastModifiedBy: User;

	@Field({ nullable: true })
	@Column({ nullable: true })
	public name: string;

	@Field({ nullable: true })
	@Column()
	public role: string;

	
}

@InputType()
export class UserInput extends PartialType(User, InputType) {}
