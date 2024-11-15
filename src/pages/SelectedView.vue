<template>
  <div class="select">
    <h1 v-if="cities.length === 0" class="select-title">
      {{ $t("aboutTitle") }}
    </h1>
    <div v-for="(city, index) in cities" :key="city.id">
      <WeatherToggle
        v-if="city.citySuggestions"
        :weather="city.citySuggestions"
        :index="index"
      />
      <WeatherCard
        v-if="city.citySuggestions"
        :weatherDataDay="city.citySuggestions"
        :weatherDataWeek="getWeeklyWeather(index)"
        :index="index"
      />

      <TemperatureChart
        v-if="city.hourlyRate"
        :hourlyRate="city.hourlyRate"
        :weeklyRate="getWeeklyWeather(index)"
        :index="index"
      />

      <RemoveBlock
        v-if="cities.length >= 1"
        @remove="handleRemoveBlock(index)"
      />
    </div>
  </div>
</template>

<script>
import {
  WeatherCard,
  TemperatureChart,
  RemoveBlock,
  WeatherToggle,
} from "@/components/index.js";

export default {
  components: {
    WeatherCard,
    TemperatureChart,
    RemoveBlock,
    WeatherToggle,
  },

  data() {
    return {
      cities: [],
    };
  },

  created() {
    const savedCities = localStorage.getItem("cities");
    if (savedCities) {
      this.cities = JSON.parse(savedCities);
    }
  },

  watch: {
    cities: {
      handler(newCities) {
        localStorage.setItem("cities", JSON.stringify(newCities));
      },
      deep: true,
    },
  },

  methods: {
    addCity(city) {
      this.cities.push(city);
    },

    removeCity(index) {
      this.cities.splice(index, 1);
    },

    getWeeklyWeather(index) {
      return this.$store.state.cities[index].weeklyWeather || [];
    },

    handleRemoveBlock(index) {
      this.removeCity(index);
    },
  },
};
</script>

<style scoped>
.select {
  padding: 40px;
}

.select-title {
  text-align: center;
}
</style>
