import { SystemRecord, TaskInfo } from './index';

export interface Task<T = string> extends SystemRecord<T>, TaskInfo {
	name: string;
	description: string;
    status: type enum (To_Do, In_Progress, Closed);
}
