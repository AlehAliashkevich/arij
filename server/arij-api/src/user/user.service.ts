import { Injectable } from '@nestjs/common';
import { UserContext } from '@arij/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
	constructor(@InjectRepository(User) private userRepo: Repository<User>,) {}

	public async getUsers(context: UserContext): Promise<User[]> {
		return this.userRepo.findBy({});
	}
}
