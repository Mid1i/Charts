import { ChartDataset } from "chart.js";


export interface IColors {
	backgroundColor: string,
	borderColor: string,
	pointBackgroundColor: string,
	hoverBackgroundColor: string
};


export interface IDataset<T = number> extends ChartDataset<"line", T[]> {
	label: string,
	data: T[],
	colors: IColors
};