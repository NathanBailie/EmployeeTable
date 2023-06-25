<script>
import "./genderChart.scss";
import { Pie } from "vue-chartjs";
import PieChart from "./PieChart.vue";

export default {
  name: "GenderChart",
  extends: Pie,
  components: {
    PieChart,
  },
};
</script>

<template>
  <div class="ageChart">
    <h2>Процентное соотношение сотрудников по полу</h2>
    <pie-chart></pie-chart>
  </div>
</template>