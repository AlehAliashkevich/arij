import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
	imports: [
		ConfigModule,
		TypeOrmModule.forFeature([User]),
	],
	providers: [UserResolver, UserService],
})
export class UserModule {}
