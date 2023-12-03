import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import configuration from './config/configuration';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TaskModule } from './task/task.module';
import { Task } from './task/entities/task.entity';
import { NeuroWorkerModule } from './neuro-worker/neuro-worker.module';

@Module({
	imports: [
		ConfigModule.forRoot({ load: [configuration] }),
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				uri: configService.get('MONGODB_URI'),
				compressors: ['zstd'],
			}),
			inject: [ConfigService],
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('POSTGRES_HOST'),
				port: configService.get('POSTGRES_PORT'),
				database: configService.get('POSTGRES_DB'),
				username: configService.get('POSTGRES_USER'),
				password: configService.get('POSTGRES_PASSWORD'),
				entities: [User, Task],
				synchronize: true,
				logging: [
					// 'query',
					'error',
				],
				namingStrategy: new SnakeNamingStrategy(),
			}),
			inject: [ConfigService],
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			include: [
				TaskModule,
				UserModule,
				NeuroWorkerModule
			],
		}),
		TaskModule, UserModule, NeuroWorkerModule,
	],
	controllers: [AppController],
	providers: [],
})
export class AppModule implements NestModule {
	public configure(consumer: MiddlewareConsumer): void {}
}
