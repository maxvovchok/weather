<template>
  <div class="home">
    <div v-for="(city, index) in $store.state.cities" :key="city.id">
      <AutocompleteInput :index="index" />

      <h1 v-if="!city.citySuggestions" class="home-title">
        {{ $t("homeTitle") }}
      </h1>

      <ul class="btn-list">
        <li>
          <WeatherToggle
            v-if="city.citySuggestions !== null"
            :index="index"
          ></WeatherToggle>
        </li>
        <li>
          <SelectedBlock
            :cities="city"
            v-if="city.citySuggestions !== null"
          ></SelectedBlock>
        </li>
      </ul>

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
import axios from "axios";
import {
  AutocompleteInput,
  WeatherCard,
  TemperatureChart,
  AddBlocks,
  RemoveBlock,
  SelectedBlock,
  WeatherToggle,
} from "@/components/index.js";

export default {
  components: {
    AutocompleteInput,
    WeatherCard,
    TemperatureChart,
    AddBlocks,
    RemoveBlock,
    SelectedBlock,
    WeatherToggle,
  },

  data() {
    return {
      userCity: null,
    };
  },

  handleRemoveBlock(index) {
    this.$store.commit("removeBlock", index);
  },
  handleAddBlock() {
    this.$store.commit("incrementBlocks");
    this.$store.commit("setFirstCitySelected", false);
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

.btn-list {
  display: flex;
  justify-content: space-between;
}
</style>
