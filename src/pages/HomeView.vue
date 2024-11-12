<template>
  <div class="home">
    <AutocompleteInput />
    <WeatherCard
      v-if="$store.state.citySuggestions"
      :weatherData="$store.state.citySuggestions"
    />
  </div>
</template>

<script>
import { AutocompleteInput, WeatherCard } from "@/components/index.js";

export default {
  components: {
    AutocompleteInput,
    WeatherCard,
  },
};
</script>

<style scoped>
.home {
  padding: 40px;
}
</style>
