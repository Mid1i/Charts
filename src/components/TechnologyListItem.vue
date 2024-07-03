<script setup lang="ts">
	defineProps<{
		title: string
		icon: string,
		link: string
	}>();
</script>


<template>
	<li class="technology">
		<a 
			:href="link"
			class="technology__link"
			target="_blank" 
		>
			<img
				:alt="title"
				:src="`src/assets/images/${icon}`"
				class="technology__icon"
			>
			{{ title }}
		</a>
	</li>
</template>


<style scoped lang="scss">
	.technology {
		transition: all 0.2s ease-in-out;

		&__link {
			align-items: center;
			display: flex;
			flex-direction: column;
			gap: 5px;

			font-size: 14px;
			font-weight: 500;
		}

		&__icon {
			height: 50px;
			width: 50px;
		}
	}


	@media(hover: hover) {
    .technology:hover {
      transform: scale(1.15);
    }
  }
</style>