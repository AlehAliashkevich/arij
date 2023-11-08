import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/user.decorator';
import { UserContext } from '@arij/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Resolver()
export class UserResolver {
	constructor(private userService: UserService) {}

	@Query(() => [User], { name: 'users' })
	public getUsers(@CurrentUser() context: UserContext): Promise<User[]> {
		return this.userService.getUsers(context);
	}
}
