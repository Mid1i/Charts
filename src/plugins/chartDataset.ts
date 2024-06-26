import type { IDataset } from "@/interfaces/IDataset";
import { ChartDataset } from "chart.js";


export const getChartDataset = ({ data, label, colors }: IDataset): ChartDataset => ({
	backgroundColor: colors.backgroundColor,
	borderColor: colors.borderColor,
	borderJoinStyle: "round",
	borderWidth: 2,
	data: data,
	fill: true,
	label: label,
	pointBackgroundColor: colors.pointBackgroundColor,
	pointHitRadius: 20,
	pointRadius: 6,
	hoverBackgroundColor: colors.hoverBackgroundColor,
	hoverRadius: 10,
	tension: 0.4
});