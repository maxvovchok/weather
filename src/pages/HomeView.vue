<template>
  <div class="home">
    <div v-for="(city, index) in $store.state.cities" :key="city.id">
      <AutocompleteInput :index="index" />

      <h1
        v-if="!city.citySuggestions && !$store.state.isLoading"
        class="home-title"
      >
        {{ $t("homeTitle") }}
      </h1>

      <ul class="btn-list">
        <li>
          <WeatherToggle
            v-if="city.citySuggestions"
            :weather="city.citySuggestions"
            :index="index"
          />
        </li>
        <li>
          <SelectedBlock
            :cities="city"
            :weeklyWeather="city.weeklyWeather"
            v-if="city.citySuggestions"
          />
        </li>
      </ul>

      <WeatherCard
        v-if="city.citySuggestions"
        :weatherDataDay="city.citySuggestions"
        :weatherDataWeek="city.weeklyWeather"
        :index="index"
      />

      <TemperatureChart
        v-if="city.hourlyRate"
        :hourlyRate="city.hourlyRate"
        :weeklyRate="city.weeklyWeather"
        :index="index"
      />

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
  WeatherToggle,
} from "@/components/index.js";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import {
  getUserLocation,
  getHourlyRate,
  getCityCoordinates,
} from "@/service/index";

export default {
  components: {
    AutocompleteInput,
    WeatherCard,
    TemperatureChart,
    AddBlocks,
    RemoveBlock,
    SelectedBlock,
    WeatherToggle,
    Loading,
  },

  async created() {
    this.$store.dispatch("setLoading", true);

    try {
      const userLocation = await getUserLocation();
      if (userLocation) {
        const { lat, lon, city } = userLocation;

        const suggestions = await getCityCoordinates(lat, lon);

        if (suggestions) {
          const index = 0;

          this.$store.commit("setCitySuggestions", {
            index,
            city: suggestions.city,
          });

          await getHourlyRate(city).then((res) =>
            this.$store.commit("setGetHourlyRate", { index, hourlyRate: res })
          );
        }
        this.$store.dispatch("setLoading", false);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
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

.btn-list {
  display: flex;
  justify-content: space-between;
}
</style>
