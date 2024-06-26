export interface IColors {
	backgroundColor: string,
	borderColor: string,
	pointBackgroundColor: string,
	hoverBackgroundColor: string
};


export interface IDataset {
	label: string,
	data: number[],
	colors: IColors
};