import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
	constructor() {
		console.log('hello');
	}
	@Get()
	public healthy(): string {
		return 'HEALTHY';
	}
}
