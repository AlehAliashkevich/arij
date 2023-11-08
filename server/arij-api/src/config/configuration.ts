import { randomUUID } from 'crypto';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default () => ({
	internal: {
		serverId: randomUUID(),
	},
});
