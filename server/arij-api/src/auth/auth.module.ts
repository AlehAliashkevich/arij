import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
	imports: [
		ConfigModule,
		PassportModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get('SECRET_KEY'),
				signOptions: { expiresIn: '2m' },
			}),
			inject: [ConfigService],
		}),
	],
	providers: [JwtStrategy],
})
export class AuthModule {}
