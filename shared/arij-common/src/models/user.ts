import { SystemRecord, UserInfo } from './index';

export interface User<T = string> extends SystemRecord<T>, UserInfo {
	name: string;
	role: string;
}
