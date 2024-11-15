<template>
  <div class="temperature-chart" v-if="isDay">
    <canvas ref="myChart"></canvas>
  </div>

  <div class="temperature-chart" v-else>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>
import { ref, watch, onMounted, onBeforeUnmount, computed } from "vue";
import { useStore } from "vuex";
import Chart from "chart.js/auto";

export default {
  name: "TemperatureChart",
  props: {
    hourlyRate: {
      type: Object,
      required: true,
    },
    weeklyRate: {
      type: Array,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const myChart = ref(null);
    const chart = ref(null);
    const listtime = ref([]);
    const labels = ref([]);

    const store = useStore();

    const isDay = computed(() => {
      return store.state.cities[props.index]?.regime === "day";
    });

    const createDayChart = () => {
      if (myChart.value) {
        const ctx = myChart.value.getContext("2d");
        chart.value = new Chart(ctx, {
          type: "line",
          data: {
            labels: labels.value,
            datasets: [
              {
                label: `Temperature (°C)`,
                data: listtime.value,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                spanGaps: true,
              },
            ],
          },
          options: {
            responsive: true,
            animation: false,
            scales: {
              y: {
                beginAtZero: false,
              },
            },
          },
        });
      }
    };

    const createWeekChart = () => {
      if (myChart.value) {
        const ctx = myChart.value.getContext("2d");
        chart.value = new Chart(ctx, {
          type: "line",
          data: {
            labels: labels.value,
            datasets: [
              {
                label: `Temperature (°C)`,
                data: listtime.value,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                spanGaps: true,
              },
            ],
          },
          options: {
            responsive: true,
            animation: false,
            scales: {
              y: {
                beginAtZero: false,
              },
            },
          },
        });
      }
    };

    const refreshChart = () => {
      destroyChart();
      if (isDay.value) {
        filterTodayData();
        createDayChart();
      } else {
        filterWeeklyData();
        createWeekChart();
      }
    };

    const filterTodayData = () => {
      const today = new Date().toISOString().split("T")[0];
      const timeLabels = Array.from({ length: 8 }, (_, i) => `${i * 3}:00`);
      const hourlyData = Array(8).fill(null);

      if (props.hourlyRate && props.hourlyRate.list) {
        props.hourlyRate.list.forEach((item) => {
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
      }

      listtime.value = hourlyData;
      labels.value = timeLabels;
    };

    const filterWeeklyData = () => {
      const days = props.weeklyRate.map((item) => {
        const date = new Date(item.dayWeek * 1000);
        return date.toLocaleDateString("uk-UA", { weekday: "long" });
      });

      const temps = props.weeklyRate.map((item) => item.temp);

      listtime.value = temps;
      labels.value = days;
    };

    const destroyChart = () => {
      if (chart.value) {
        chart.value.stop();
        chart.value.destroy();
        chart.value = null;
      }
    };

    onMounted(() => {
      refreshChart();
    });

    watch(
      () => props.hourlyRate,
      () => {
        refreshChart();
      },
      { immediate: true }
    );

    watch(
      () => props.weeklyRate,
      () => {
        refreshChart();
      },
      { immediate: true }
    );

    watch(
      isDay,
      () => {
        refreshChart();
      },
      { immediate: true }
    );

    onBeforeUnmount(() => {
      destroyChart();
    });

    return {
      myChart,
    };
  },
};
</script>

<style>
.temperature-chart {
  margin-bottom: 20px;
}
</style>
