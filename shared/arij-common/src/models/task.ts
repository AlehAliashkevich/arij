import { SystemRecord, TaskInfo } from './index';

export interface Task<T = string> extends SystemRecord<T>, TaskInfo {
	name: string;
	description: string;
    status: Report enum Status{
		To_Do = 'To do',
		In_Progress = 'In progress',
		Closed = 'Closed',
	}
}
