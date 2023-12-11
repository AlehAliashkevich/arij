import { SystemRecord } from './index';

export enum Status {
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED',
    IN_PROGRESS = 'IN_PROGRESS',
}

export interface NeuroWorkerModel<T = string> extends SystemRecord<T> {
    neuro_workerID: string,
    taskid: string, 
    input: string, 
    output: string, 
    status: Status, 
    input_tokens: number, 
    output_tokens: number, 
    price: number
}