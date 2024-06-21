<script setup lang="ts">
	import TechnologyListItem from "@/components/TechnologyListItem.vue";

	interface ITechnologies {
		title: string,
		icon: string
	};


	const technologies: ITechnologies[] = [
		{
			title: "Vue",
			icon: "vue.svg"
		},
		{
			title: "TypeScript",
			icon: "typescript.svg"
		},
		{
			title: "Chart.js",
			icon: "chartjs.svg"
		},
		{
			title: "SCSS",
			icon: "scss.svg"
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
		gap: 30px;
	}
</style>