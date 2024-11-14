<template>
  <div class="about">
    <h1 v-if="cities.length === 0" class="about-title">
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
      <!-- <TemperatureChart
        v-if="city.hourlyRate"
        :hourlyRate="city.hourlyRate"
        :weeklyRate="getWeeklyWeather(index)"
        :index="index"
      /> -->

      <RemoveBlock @remove="handleRemoveBlock(index)" />
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
    this.loadCities();
    console.log("qwe", this.$store.state.cities);
  },

  methods: {
    loadCities() {
      const storedCities = localStorage.getItem("cities");
      if (storedCities) {
        this.cities = JSON.parse(storedCities);
      }
    },

    handleRemoveBlock(index) {
      this.cities.splice(index, 1);
      localStorage.setItem("cities", JSON.stringify(this.cities));
    },

    getWeeklyWeather(index) {
      return this.$store.state.cities[index]?.weeklyWeather;
    },
  },
};
</script>

<style>
.about {
  padding: 40px;
}

.about-title {
  text-align: center;
}
</style>
