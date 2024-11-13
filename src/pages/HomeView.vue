<template>
  <div class="home">
    <div v-for="(city, index) in $store.state.cities" :key="city.id">
      <AutocompleteInput :index="index" />
      <WeatherCard
        v-if="city.citySuggestions"
        :weatherData="city.citySuggestions"
      />
      <TemperatureChart v-if="city.hourlyRate" :hourlyRate="city.hourlyRate" />

      <RemoveBlock
        v-if="$store.state.cities.length > 1"
        @remove="handleRemoveBlock(index)"
      />
    </div>

    <AddBlocks
      v-if="
        $store.state.isFirstCitySelected &&
        $store.state.cities[0].citySuggestions !== null
      "
    />
  </div>
</template>

<script>
import {
  AutocompleteInput,
  WeatherCard,
  TemperatureChart,
  AddBlocks,
  RemoveBlock,
} from "@/components/index.js";

export default {
  components: {
    AutocompleteInput,
    WeatherCard,
    TemperatureChart,
    AddBlocks,
    RemoveBlock,
  },

  methods: {
    handleRemoveBlock(index) {
      this.$store.commit("removeBlock", index);
    },
    handleAddBlock() {
      this.$store.commit("incrementBlocks");
      this.$store.commit("setFirstCitySelected", false);
    },
  },
};
</script>

<style scoped>
.home {
  padding: 40px;
}
</style>
