<template>
  <div class="about">
    <h1 v-if="cities.length === 0" class="about-title">
      Ви не обрали, не одне місто
    </h1>
    <div v-for="(city, index) in cities" :key="city.id">
      <WeatherCard
        v-if="city.citySuggestions"
        :weatherData="city.citySuggestions"
      />
      <TemperatureChart v-if="city.hourlyRate" :hourlyRate="city.hourlyRate" />

      <RemoveBlock @remove="handleRemoveBlock(index)" />
    </div>
  </div>
</template>

<script>
import {
  WeatherCard,
  TemperatureChart,
  RemoveBlock,
} from "@/components/index.js";

export default {
  components: {
    WeatherCard,
    TemperatureChart,
    RemoveBlock,
  },

  data() {
    return {
      cities: [],
    };
  },

  created() {
    this.loadCities();
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
