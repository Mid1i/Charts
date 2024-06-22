<script setup lang="ts">
	import { chartConfig } from "@/plugins/chartConfig";
	import { Chart } from "chart.js/auto";
	import { ref, onMounted } from "vue";


	const data: number[] = [508, 890, 1101, 715, 1154, 708, 338, 515, 1084, 1110, 823, 870, 860, 610, 559, 1058, 1058, 897, 938, 794, 783, 520];
	const data2: number[] = [166, 232, 269, 212, 296, 201, 127, 175, 257, 285, 237, 252, 226, 183, 134, 274, 266, 250, 259, 259, 175, 105];

	const labels: string[] = ["01.04", "02.04", "03.04", "04.04", "05.04", "06.04", "07.04", "08.04", "09.04", "10.04", "11.04", "12.04", "13.04", "14.04", "15.04", "16.04", "17.04", "18.04", "19.04", "20.04", "21.04"];

	const canvasRef = ref<HTMLCanvasElement>();

	onMounted(() => {
		if (canvasRef.value) {
			const chart = new Chart(canvasRef.value, chartConfig(data, data2, labels));
			chart.update();
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