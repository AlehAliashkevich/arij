import { SystemRecord, TaskInfo } from './index';

export interface Task<T = string> extends SystemRecord<T>, TaskInfo {
	name: string;
	description: string;
    status: Report enum Status{
		To_Do = 'To_do',
		In_Progress = 'In_progress',
		Closed = 'Closed'
	}
}