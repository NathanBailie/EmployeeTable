<script>
import "./ageChart.scss";
import { Bar } from "vue-chartjs";
import BarChart from "./BarChart.vue";
import store from "../../store/store";

export default {
  name: "AgeChart",
  extends: Bar,
  components: {
    BarChart,
  },
  mounted() {
    store.commit("getAmountOfAgeGroups");
  },
};
</script>

<template>
  <div class="ageChart">
    <h2>Количество сотрудников по возрасту</h2>
    <bar-chart></bar-chart>
  </div>
</template>