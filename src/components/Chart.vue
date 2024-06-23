<script setup lang="ts">
	import { chartConfig } from "@/plugins/chartConfig";
	import { Chart, ChartEvent, InteractionItem } from "chart.js/auto";
	import { ref, onMounted } from "vue";


	const data: number[] = [508, 890, 1101, 715, 1154, 708, 338, 515, 1084, 1110, 823, 870, 860, 610, 559, 1058, 1058, 897, 938, 794, 783, 520];
	const data2: number[] = [166, 232, 269, 212, 296, 201, 127, 175, 257, 285, 237, 252, 226, 183, 134, 274, 266, 250, 259, 259, 175, 105];

	const labels: string[] = ["01.04", "02.04", "03.04", "04.04", "05.04", "06.04", "07.04", "08.04", "09.04", "10.04", "11.04", "12.04", "13.04", "14.04", "15.04", "16.04", "17.04", "18.04", "19.04", "20.04", "21.04"];

	const canvasRef = ref<HTMLCanvasElement>();
	const hoveredPoint = ref<InteractionItem | null>(null);


	onMounted(() => {
		if (canvasRef.value) {
			Chart.register({
				id: "afterDatasetsDraw",
				afterDatasetsDraw: (chart: Chart) => {
					const ctx = chart.ctx;
	
					ctx.font = "500 14px Manrope";
					ctx.fillStyle = "white";

					ctx.textAlign = "center";
					ctx.textBaseline = "bottom";

					chart.config.data.datasets.forEach((dataset, datasetIndex) => {
						const meta = chart.getDatasetMeta(datasetIndex);

						const hoveredPointIndex = hoveredPoint.value?.index;
						const hoveredPointDatasetIndex = hoveredPoint.value?.datasetIndex;

						const hoveredPointPosition = {
							x: hoveredPoint.value?.element.x,
							y: hoveredPoint.value?.element.y
						};

						meta.data.forEach((point, index) => {
							const data = dataset.data[index];

							if (datasetIndex === hoveredPointDatasetIndex) {
								if (hoveredPointIndex && (index === hoveredPointIndex - 1 || index === hoveredPointIndex + 1)) {
									if (Math.abs(point.x - hoveredPointPosition.x) > 20 && Math.abs(point.y - hoveredPointPosition.y) > 20) {
										ctx.font = "500 14px Manrope";
										ctx.fillText(String(data), point.x, point.y - 10);
									}
								} else {
									if (index % 2 === 0 || index === hoveredPointIndex) {
										index === hoveredPointIndex ? ctx.font = "600 18px Manrope" : ctx.font = "500 14px Manrope";
	
										ctx.fillText(String(data), point.x, point.y - 10);
									}
								}
							} else {
								if (index % 2 === 0) {
									ctx.font = "500 14px Manrope";
									ctx.fillText(String(data), point.x, point.y - 10);
								}
							}
						});
					});
				}
			});

			const chart = new Chart(canvasRef.value, chartConfig(data, data2, labels));
			chart.update();

			chart.options.onHover = (event: ChartEvent) => {
				const points = chart.getElementsAtEventForMode(event, "nearest", { intersect: true }, false);

				if (points.length) {
					hoveredPoint.value = points[0];
				} else {
					hoveredPoint.value = null;
				}
			}
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
		height: 400px;
		width: 800px;
	}
</style>