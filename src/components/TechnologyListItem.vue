<script setup lang="ts">
	defineProps<{
		title: string
		icon: string
	}>();
</script>


<template>
	<li class="technology">
		<img
			:alt="title"
			:src="`src/assets/images/${icon}`"
			class="technology__icon"
		>
		{{ title }}
	</li>
</template>


<style scoped lang="scss">
	.technology {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 5px;

		font-size: 14px;
		font-weight: 500;

		transition: all 0.2s ease-in-out;

		&__icon {
			height: 70px;
			width: 70px;
		}
	}


	@media(hover: hover) {
    .technology:hover {
      transform: scale(1.15);
    }
  }
</style>