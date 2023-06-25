<script>
import { Pie } from "vue-chartjs";
import store from "../../store/store";

export default {
  extends: Pie,
  data() {
    return {
      chartData: {
        labels: ["Female", "Male"],
        datasets: [
          {
            label: "Pie Chart",
            borderWidth: 1,
            borderColor: ["rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
            backgroundColor: [
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            data: [],
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    updateData() {
      this.chartData.datasets[0].data = store.state.percentRatioOfGenders;
    },
  },
  mounted() {
    store.commit("getPercentRatioOfGenders");
    this.updateData();
    this.renderChart(this.chartData, this.options);
  },
};
</script>