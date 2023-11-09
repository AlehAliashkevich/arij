import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import * as processRequest from 'graphql-upload/processRequest.js';
import { AppModule } from './app.module';
import { EventEmitter } from 'events';

EventEmitter.setMaxListeners(20);

async function bootstrap(): Promise<void> {
	const fastifyAdapter = new FastifyAdapter();

	fastifyAdapter.enableCors({
		origin: '*',
		credentials: true,
	});

	fastifyAdapter.getInstance().addContentTypeParser('multipart', (request: any, payload, done) => {
		request.isMultipart = true;
		done(null);
	});

	fastifyAdapter.getInstance().addHook('preValidation', async (request: any, reply) => {
		// TODO: check for Sentry Officially supported way to view body in traces in Fastify
		if (!request.isMultipart) {
			return;
		}
		request.body = await processRequest(request.raw, reply.raw, {
			maxFileSize: 262144000, // 250 MB
			maxFiles: 20,
		});
	});

	const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter);
	const configService = app.get(ConfigService);
	await app.listen(configService.get('PORT'), '0.0.0.0');
}

bootstrap();
