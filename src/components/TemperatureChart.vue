<template>
  <canvas ref="myChart"></canvas>
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
              label: "Температура (°C)",
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

    updateChart(newData) {
      if (this.chart) {
        this.chart.data.datasets[0].data = newData;
        this.chart.update();
      }
    },

    filterTodayData() {
      const today = new Date().toISOString().split("T")[0];
      const hourlyData = Array(24).fill(null);
      const timeLabels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

      this.hourlyRate.list.forEach((item) => {
        const dateTime = item.dt_txt.split(" ")[0];
        const time = item.dt_txt.split(" ")[1].slice(0, 2);

        if (dateTime === today) {
          const hour = parseInt(time);
          const temp = item.main.temp - 273.15;
          hourlyData[hour] = temp;
          console.log(" hourlyData[hour]", hourlyData);
        }
      });

      this.listtime = hourlyData;
      this.labels = timeLabels;
      this.updateChart(this.listtime);
    },
  },

  beforeUnmount() {
    this.destroyChart();
  },
};
</script>
