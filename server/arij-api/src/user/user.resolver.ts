import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/auth/user.decorator';
import { UserContext } from '@efficiently/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@UseGuards(JwtAuthGuard)
@Resolver()
export class UserResolver {
	constructor(private userService: UserService) {}

	@Query(() => [User], { name: 'users' })
	public getUsers(@CurrentUser() context: UserContext): Promise<User[]> {
		return this.userService.getUsers(context);
	}
}
