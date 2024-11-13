<template>
  <div class="home">
    <AutocompleteInput />
    <WeatherCard
      v-if="$store.state.citySuggestions"
      :weatherData="$store.state.citySuggestions"
    />
    <TemperatureChart
      v-if="$store.state.hourlyRate"
      :hourlyRate="$store.state.hourlyRate"
    ></TemperatureChart>
  </div>
</template>

<script>
import {
  AutocompleteInput,
  WeatherCard,
  TemperatureChart,
} from "@/components/index.js";

export default {
  components: {
    AutocompleteInput,
    WeatherCard,
    TemperatureChart,
  },
};
</script>

<style scoped>
.home {
  padding: 40px;
}
</style>
