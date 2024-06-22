import { AnimationEvent, Chart, ChartEvent, ChartConfiguration, ActiveElement } from "chart.js";


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
		animation: {
			onComplete: (chart: AnimationEvent): void => onDrawDatalabales(chart),
			// onProgress: (chart: AnimationEvent): void => onDrawDatalabales(chart)
		},
		onHover: (event: ChartEvent, elements: ActiveElement[], chart: Chart) => {
			// console.log(1);
			const ctx = chart.ctx;
		}
	}
});


const onDrawDatalabales = (chart: AnimationEvent): void => {
	const ctx = chart.chart.ctx;
	
	ctx.font = "500 14px Manrope";
	ctx.fillStyle = "white";

	ctx.textAlign = "center";
	ctx.textBaseline = "bottom";

	chart.chart.config.data.datasets.forEach((dataset, index) => {
		const meta = chart.chart.getDatasetMeta(index);

		meta.data.forEach((item, i) => {
			if (i % 2 === 0) {
				const data = dataset.data[i];

				i === 0 ? ctx.fillText(String(data), item.x + 15, item.y - 10) : ctx.fillText(String(data), item.x, item.y - 10);
			}
		});
	});
}
