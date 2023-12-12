import { SystemRecord } from './index';

export enum NeuroWorkerTaskStatus {
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED',
    IN_PROGRESS = 'IN_PROGRESS',
}

export interface NeuroWorkerModel<T = string> extends SystemRecord<T> {
    neuroWorkerID: string,
    taskid: string, 
    input: string, 
    output: string, 
    status: NeuroWorkerTaskStatus, 
    inputTokens: number, 
    outputTokens: number, 
    price: number
}