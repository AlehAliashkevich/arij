import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
	constructor() {}
	@Get()
	public healthy(): string {
		return 'HEALTHY';
	}
}
