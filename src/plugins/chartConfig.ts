import { ChartConfiguration } from "chart.js";
import type { IDataset } from "@/interfaces/IDataset";

import { getChartDataset } from "@/plugins/chartDataset";


export const chartConfig = (datasets: IDataset[], labels: string[]): ChartConfiguration => ({
	type: "line",
	data: {
		labels: labels,
		datasets: datasets.map(dataset => getChartDataset(dataset)),
	},
	options: {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			legend: {
				align: "start",
				position: "right",
				labels: {
					padding: 40,
					boxHeight: 20,
					boxWidth: 20,
					color: "#A9A9A9",
					font: {
						size: 13
					}
				}
			},
			tooltip: {
				enabled: false
			}
		},
		layout: {
			padding: {
				top: 20,
				right: 10
			}
		},
		scales: {
			y: {
				beginAtZero: true,
				border: {
					color: "#2C2C2E",
					display: true,
					dash: [15, 10]
				},
				grid: {
					color: "rgb(235, 235, 245, .1)",
					tickLength: 10,
					tickWidth: 0
				},
				ticks: {
					color: "#A9A9A9",
					font: {
						size: 12,
					},
					stepSize: 100,
					callback: (value: string | number): string | number => (Number(value) > 0) ? value : ""
				}
			},
			x: {
				border: {
					color: "#2C2C2E",
					display: true
				},
				grid: {
					color: "rgb(235, 235, 245, .1)",
					display: true,
					drawOnChartArea: false,
					tickLength: 10,
					tickWidth: 0
				},
				ticks: {
					color: "#A9A9A9",
					font: {
						size: 12,
					},
					callback: (_, index: number): string => index % 2 === 0 ? labels[index] : ""
				}
			}
		},
		hover: {
			mode: "nearest",
			intersect: true
		}
	}
});
