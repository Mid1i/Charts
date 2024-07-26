import { Chart, Element, InteractionItem } from "chart.js";
import { isEven, isNeighboringPoint } from "@/helpers/chart";


export const onDrawDatasets = (chart: Chart, hoveredPoint: InteractionItem | null) => {
	const ctx = chart.ctx;
	
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.textBaseline = "bottom";

	chart.config.data.datasets.forEach((dataset, datasetIndex) => {
		const meta = chart.getDatasetMeta(datasetIndex);

		const hoveredPointPosition = hoveredPoint ? { x: hoveredPoint?.element.x, y: hoveredPoint?.element.y } : null;

		if (!meta.hidden) {
			meta.data.forEach((point, index) => {
				const data = dataset.data[index];
	
				if ((isEven(index) && !isNeighboringPoint(point, hoveredPointPosition)) || point.active) onDrawPoint(ctx, String(data), point, index, point.active);
			});
		}
})};


const onDrawPoint = (ctx: CanvasRenderingContext2D, data: string, point: Element, index: number, isActive: boolean = false): void => {
	ctx.font = `${isActive ? "600 20px" : "500 14px"} Manrope`;

	const x = index === 0 ? point.x + 10 : point.x;
	const y = point.y - 10;

	ctx.fillText(String(data), x, y);
};
