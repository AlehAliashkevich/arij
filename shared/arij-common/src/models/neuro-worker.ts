import { SystemRecord } from './index';

export interface NeuroWorker<T = string> extends SystemRecord<T> {
	name: string;
	id: number;
}