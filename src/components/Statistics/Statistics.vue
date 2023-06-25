<script>
import "./statistics.scss";
import AgeChart from "../AgeChart/AgeChart.vue";
import GenderChart from "../GenderChart/GenderChart.vue";

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