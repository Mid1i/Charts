import { Chart, Element, InteractionItem } from "chart.js";
import { isEven, isNeighboringPoint } from "@/helpers/chart";


export const onDrawDatasets = (chart: Chart, hoveredPoint: InteractionItem | null) => {
	const ctx = chart.ctx;
	
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.textBaseline = "bottom";

	chart.config.data.datasets.forEach((dataset, datasetIndex) => {
		const meta = chart.getDatasetMeta(datasetIndex);

		const hoveredPointIndex = hoveredPoint?.index;
		const hoveredPointDatasetIndex = hoveredPoint?.datasetIndex;

		const hoveredPointPosition = hoveredPoint ? { x: hoveredPoint?.element.x, y: hoveredPoint?.element.y } : null;

		meta.data.forEach((point, index) => {
			const data = dataset.data[index];

			const isHoveredDataset = datasetIndex === hoveredPointDatasetIndex;
			const isHoveredPoint = index === hoveredPointIndex && isHoveredDataset;

			if ((isEven(index) && !isNeighboringPoint(point, hoveredPointPosition)) || isHoveredPoint) onDrawPoint(ctx, String(data), point, index, isHoveredPoint);
	});
})};


const onDrawPoint = (ctx: CanvasRenderingContext2D, data: string, point: Element, index: number, isActive: boolean = false): void => {
	ctx.font = `${isActive ? "600 20px" : "500 14px"} Manrope`;

	const x = index === 0 ? point.x + 10 : point.x;
	const y = point.y - 10;

	ctx.fillText(String(data), x, y);
};
