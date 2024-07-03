<script setup lang="ts">
	import { ref, onMounted } from "vue";
	import { Chart, InteractionItem } from "chart.js/auto";
	import type { IDataset } from "@/interfaces/IDataset";

	import { onDrawDatasets } from "@/plugins/chartDatasetDraw";
	import { onChartHover } from "@/plugins/chartHoverEffect";
	import { chartConfig } from "@/plugins/chartConfig";


	const datasets: IDataset[] = [
		{
			data: [166, 232, 269, 212, 296, 201, 127, 175, 257, 285, 237, 252, 226, 183, 134, 274, 266, 250, 259, 259, 175, 105],
			label: "Рабочие",
			colors: {
				backgroundColor: "rgb(18, 183, 1, .2)",
				borderColor: "rgb(18, 183, 1)",
				pointBackgroundColor: "rgb(18, 183, 1, .6)",
				hoverBackgroundColor: "rgb(18, 183, 1)"
			}
		},
		{
			data: [508, 890, 1101, 715, 1154, 708, 338, 515, 1084, 1110, 823, 870, 860, 610, 559, 1058, 1058, 897, 938, 794, 783, 520],
			label: "Техника",
			colors: {
				backgroundColor: "rgba(10, 132, 255, .2)",
				borderColor: "rgb(10, 132, 255)",
				pointBackgroundColor: "rgb(10, 132, 255, .6)",
				hoverBackgroundColor: "rgb(10, 132, 255)"
			}
		}
	];


	const labels: string[] = ["24.06", "25.06", "26.06", "27.06", "28.06", "29.06", "30.06", "01.07", "02.07", "03.07", "04.07", "05.07", "06.07", "07.07", "08.07", "09.07", "10.07", "11.07", "12.07", "13.07", "14.07"];

	const canvasRef = ref<HTMLCanvasElement>();
	const hoveredPoint = ref<InteractionItem | null>(null);


	onMounted(() => {
		if (canvasRef.value) {
			Chart.register({
				id: "afterDatasetsDraw",
				afterDatasetsDraw: (chart: Chart) => onDrawDatasets(chart, hoveredPoint.value)
			});

			const chart = new Chart(canvasRef.value, chartConfig(datasets, labels));

			canvasRef.value.addEventListener("mousemove", (event: Event) => hoveredPoint.value = onChartHover(event, chart));
		}
	});
</script>


<template>
	<div class="chart">
		<canvas ref="canvasRef"></canvas>
	</div>
</template>


<style scoped lang="scss">
	.chart {
		margin-bottom: 20px;

		height: 450px;
		width: 950px;
	}
</style>