<template>
  <div class="temperature-chart">
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "MyChartComponent",

  props: {
    hourlyRate: {
      type: Object,
    },
  },
  data() {
    return {
      chart: null,
      listtime: [],
      labels: [],
    };
  },
  mounted() {
    this.filterTodayData();
    this.createChart();
  },

  methods: {
    createChart() {
      const ctx = this.$refs.myChart.getContext("2d");
      this.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: this.labels,
          datasets: [
            {
              label: `${this.$t("temperature")} (°C)`,
              data: this.listtime,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              spanGaps: true,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      });
    },

    refreshChart() {
      if (this.chart) {
        this.chart.destroy();
      }

      this.filterTodayData();
      this.createChart();
    },

    filterTodayData() {
      const today = new Date().toISOString().split("T")[0];

      const timeLabels = Array.from({ length: 8 }, (_, i) => `${i * 3}:00`);

      const hourlyData = Array(8).fill(null);

      this.hourlyRate.list.forEach((item) => {
        const dateTime = item.dt_txt.split(" ")[0];
        const time = item.dt_txt.split(" ")[1].slice(0, 2);

        if (dateTime === today) {
          const hour = parseInt(time);

          if (hour % 3 === 0 && hour <= 21) {
            const temp = item.main.temp - 273.15;
            hourlyData[hour / 3] = temp;
          }
        }
      });

      this.listtime = hourlyData;
      this.labels = timeLabels;
    },
  },
  watch: {
    hourlyRate() {
      this.refreshChart();
    },
  },
};
</script>

<style>
.temperature-chart {
  margin-bottom: 20px;
}
</style>
