import { User } from './index';

export interface UserContext {
	iat: number;
	exp: number;
	userInfo: User;
}
