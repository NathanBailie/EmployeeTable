<script>
import "./ageChart.scss";
import { Bar } from "vue-chartjs";
import BarChart from "./BarChart.vue";

export default {
  name: "AgeChart",
  extends: Bar,
  components: {
    BarChart,
  },
};
</script>

<template>
  <div class="ageChart">
    <h2>График статистики количества сотрудников по возрасту</h2>
    <bar-chart></bar-chart>
  </div>
</template>