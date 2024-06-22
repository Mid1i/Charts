<script setup lang="ts">
  import TechnologyList from "@/components/TechnologyList.vue";
  import Chart from "@/components/Chart.vue";
</script>

<template>
  <div class="container">
    <h1 class="container__title">Задание для прохождения практики</h1>
    <p class="container__text"><span>Задача:</span> Реализовать инструмент для построения графиков, в котором при отображении тултипа точки, будут скрываться ближайшие точки.</p>
    <TechnologyList/>
    <Chart/>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;

    padding: 10px 100px;

    height: 100%;
    width: 100%;

    &__title {
      font-size: 36px;
      margin-bottom: 40px;
    }

    &__text {
      font-size: 16px;

      max-width: 550px;
      margin-bottom: 30px;

      & span {
        font-weight: 600;
        text-decoration: underline;
      }
    }
  }
</style>
