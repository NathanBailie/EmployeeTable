<script>
import "./genderChart.scss";
import { Pie } from "vue-chartjs";
import PieChart from "./PieChart.vue";
import store from "../../store/store";

export default {
  name: "GenderChart",
  extends: Pie,
  components: {
    PieChart,
  },
  mounted() {
    store.commit("getPercentRatioOfGenders");
  },
};
</script>

<template>
  <div class="ageChart">
    <h2>Процентное соотношение сотрудников по полу</h2>
    <pie-chart></pie-chart>
  </div>
</template>