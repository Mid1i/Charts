import { Element } from "chart.js";


export const isEven = (num: number) => num % 2 === 0;

export const isNeighboringPoint = (point: Element, hoveredPointPosition: { x: number, y: number } | null) => 
	hoveredPointPosition?.x && (Math.abs(point.x - hoveredPointPosition.x) < 40 && 	Math.abs(point.y - hoveredPointPosition.y) < 20);