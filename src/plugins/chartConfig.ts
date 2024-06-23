import { ChartConfiguration } from "chart.js";


export const chartConfig = (data: number[], data2: number[], labels: string[]): ChartConfiguration => ({
	type: "line",
	data: {
		labels: labels,
		datasets: [
			{
				borderColor: "rgb(10, 132, 255, 1)",
				borderJoinStyle: "round",
				borderWidth: 2,
				data: data,
				fill: true,
				pointBackgroundColor: "rgb(10, 132, 255, .6)",
				pointHitRadius: 20,
				pointRadius: 6,
				hoverBackgroundColor: "rgb(10, 132, 255, 1)",
				hoverRadius: 10,
				tension: 0.4
			},
			{
				borderColor: "rgb(18, 183, 9)",
				borderJoinStyle: "round",
				borderWidth: 2,
				data: data2,
				fill: true,
				pointBackgroundColor: "rgb(18, 183, 9, .6)",
				pointHitRadius: 20,
				pointRadius: 6,
				hoverBackgroundColor: "rgb(18, 183, 9)",
				hoverRadius: 10,
				tension: 0.4
			}
		],
	},
	options: {
		maintainAspectRatio: true,
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false
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
