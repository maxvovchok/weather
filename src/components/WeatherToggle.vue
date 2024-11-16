<template>
  <ul class="weather-toggle-list">
    <li>
      <MyButton
        :styles="{ backgroundColor: 'aliceblue' }"
        :hoverStyles="{ backgroundColor: 'rgb(139, 139, 250)' }"
        @click="setDayView"
        :disabled="isDayViewClicked"
      >
        {{ $t("day") }}
      </MyButton>
    </li>
    <li>
      <MyButton
        :styles="{ backgroundColor: 'aliceblue' }"
        :hoverStyles="{ backgroundColor: 'rgb(139, 139, 250)' }"
        @click="setWeekView"
        :disabled="isWeekViewClicked"
      >
        {{ $t("week") }}
      </MyButton>
    </li>
  </ul>
</template>

<script>
import { MyButton } from "@/UI";
import { getCityCoordinatesWeek } from "@/service/index.js";

export default {
  props: {
    weather: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  components: {
    MyButton,
  },
  data() {
    return {
      weeklyTemperatures: [],
      weeklyWeather: [],
      isDayViewClicked: null,
      isWeekViewClicked: null,
    };
  },
  created() {
    const regime = this.$store.state.cities[this.index].regime;
    if (regime === "day") {
      this.isDayViewClicked = true;
    } else {
      this.isWeekViewClicked = true;
    }
  },
  methods: {
    async setWeekView() {
      this.$store.dispatch("setLoading", true);
      const data = await getCityCoordinatesWeek(
        this.weather.coord.lat,
        this.weather.coord.lon
      );

      this.isWeekViewClicked = true;
      this.isDayViewClicked = false;

      this.weeklyWeather = this.calculateWeeklyWeather(data.list);

      this.$store.commit("seWeeklyWeather", {
        index: this.index,
        weeklyWeather: this.weeklyWeather,
      });

      this.$store.commit("setRegime", { index: this.index, regime: "week" });
      this.$store.dispatch("setLoading", false);
    },

    async setDayView() {
      this.isDayViewClicked = true;
      this.isWeekViewClicked = false;

      this.$store.commit("setRegime", { index: this.index, regime: "day" });
    },

    calculateWeeklyWeather(forecastData) {
      const dailyTemps = [];
      let currentDay = null;
      let tempSum = 0;
      let count = 0;

      forecastData.forEach((entry) => {
        const date = new Date(entry.dt * 1000);
        const day = date.toLocaleDateString();

        if (currentDay && currentDay !== day) {
          dailyTemps.push({
            temp: tempSum / count,
            description: entry.weather[0].description,
            dayWeek: entry.dt,
            entry,
          });
          tempSum = 0;
          count = 0;
        }

        tempSum += entry.main.temp - 273.15;
        count++;

        currentDay = day;
      });

      if (count > 0) {
        dailyTemps.push(tempSum / count);
      }

      return dailyTemps.splice(0, 5);
    },
  },
};
</script>

<style scoped>
.weather-toggle-list {
  padding: 0;
  display: flex;
  gap: 20px;
}

@media screen and (max-width: 768px) {
  .weather-toggle-list {
    justify-content: space-between;
  }

  .weather-toggle-list button {
    width: 70px;
  }
}
</style>
