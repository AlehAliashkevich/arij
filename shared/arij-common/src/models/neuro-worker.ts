import { SystemRecord } from './index';

export enum NeuroModel {
	GPT = 'GPT',
	GPT2 = 'GPT2',
	GPT3 = 'GPT3',
	GPT3_5 = 'GPT3_5',
	GPT3_5_Turbo = 'GPT3_5_Turbo',
	GPT4 = 'GPT4',
	Shap_E = 'Shap_E',
	CLIP = 'CLIP',
	Codex = 'Codex',
	Jukebox = 'Jukebox'
}

export interface NeuroWorkerModel<T = string> extends SystemRecord<T> {
	name: string;
	template: string;
	sizeTemplate: number;
	sizeInput: number;
	sizeOutput: number;
	model: NeuroModel;
}