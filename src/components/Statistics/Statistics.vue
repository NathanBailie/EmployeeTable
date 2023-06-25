<script>
import "./statistics.scss";
import AgeChart from "../AgeChart/AgeChart.vue";
import GenderChart from "../GenderChart/GenderChart.vue";
import store from "../../store/store";

export default {
  name: "Statistics",
  components: {
    AgeChart,
    GenderChart,
  },
};
</script>

<template>
  <div class="statistics">
    <AgeChart />
    <GenderChart />
  </div>
</template>