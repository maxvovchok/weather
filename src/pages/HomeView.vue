<template>
  <div class="home">
    <div v-for="(city, index) in $store.state.cities" :key="city.id">
      <AutocompleteInput :index="index" />
      <h1
        v-if="$store.state.cities[0].citySuggestions === null"
        class="home-title"
      >
        Введіть місто та дізнайтесь погоду
      </h1>
      <SelectedBlock
        :cities="city"
        v-if="$store.state.cities[index].citySuggestions !== null"
      ></SelectedBlock>
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
  SelectedBlock,
} from "@/components/index.js";

export default {
  components: {
    AutocompleteInput,
    WeatherCard,
    TemperatureChart,
    AddBlocks,
    RemoveBlock,
    SelectedBlock,
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

.home-title {
  text-align: center;
  margin-top: 180px;
}
</style>
