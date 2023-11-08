import { UserInfo } from './index';

export interface SystemRecord<T = string> extends UserInfo {
	_id?: T;
	createdDate?: Date;
	lastModifiedDate?: Date;
}
