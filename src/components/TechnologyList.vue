<script setup lang="ts">
	import TechnologyListItem from "@/components/TechnologyListItem.vue";

	
	interface ITechnologies {
		title: string,
		icon: string,
		link: string
	};


	const technologies: ITechnologies[] = [
		{
			title: "Vue",
			icon: "vue.svg",
			link: "https://ru.vuejs.org/"
		},
		{
			title: "TypeScript",
			icon: "typescript.svg",
			link: "https://www.typescriptlang.org/"
		},
		{
			title: "Chart.js",
			icon: "chartjs.svg",
			link: "https://www.chartjs.org/"
		},
		{
			title: "SCSS",
			icon: "scss.svg",
			link: "https://sass-lang.com/"
		}
	];
</script>


<template>
	<h2 class="subtitle">Стек технологий:</h2>
	<ul class="list">
		<TechnologyListItem 
			v-for="technology in technologies"
			:key="technology.title"
			:="technology"
		/>
	</ul>
</template>


<style scoped lang="scss">
	.subtitle {
		font-size: 26px;
		margin-bottom: 20px;
	}

	.list {
		display: flex;
		gap: 20px;

		margin-bottom: 30px;
	}
</style>