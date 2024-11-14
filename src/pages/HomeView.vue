<template>
  <div class="home">
    <div v-for="(city, index) in $store.state.cities" :key="city.id">
      <AutocompleteInput :index="index" />

      <h1 v-if="!city.citySuggestions" class="home-title">
        {{ $t("homeTitle") }}
      </h1>

      <ul class="btn-list">
        <li>
          <WeatherToggle v-if="city.citySuggestions" :index="index" />
        </li>
        <li>
          <SelectedBlock :cities="city" v-if="city.citySuggestions" />
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
import {
  AutocompleteInput,
  WeatherCard,
  TemperatureChart,
  AddBlocks,
  RemoveBlock,
  SelectedBlock,
  WeatherToggle,
} from "@/components/index.js";
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
  },

  async created() {
    try {
      const userLocation = await getUserLocation();
      if (userLocation) {
        const { lat, lon, city } = userLocation;

        const suggestions = await getCityCoordinates(lat, lon);

        if (suggestions) {
          const index = this.$store.state.cities.length - 1;

          this.$store.commit("setCitySuggestions", {
            index,
            city: suggestions.city,
          });

          getHourlyRate(city).then((res) =>
            this.$store.commit("setGetHourlyRate", { index, hourlyRate: res })
          );
        }
      }
    } catch (error) {
      console.error(error);
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
