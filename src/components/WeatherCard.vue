<template>
  <ul class="weather-card-list" v-if="isDay">
    <li class="weather-main-item">
      <h2 class="weather-card-title">
        {{ weatherDataDay.name }}, {{ weatherDataDay.sys.country }}
      </h2>
      <div class="weather-info">
        <p>
          <strong>{{ $t("day") }}:</strong> {{ day }}
        </p>
        <p>
          <strong>{{ $t("date") }}:</strong> {{ formattedDate }}
        </p>
      </div>
      <div class="temperature-section">
        <p class="temp-main">
          <strong>{{ temperatureC }}°C</strong>
        </p>
        <p>
          <small>{{ $t("feelsLike") }}: {{ feelsLikeC }}°C</small>
        </p>
      </div>
    </li>
    <li class="weather-details-item">
      <p>
        <strong>{{ $t("tempMin") }}:</strong> {{ tempMinC }}°C
      </p>
      <p>
        <strong>{{ $t("tempMax") }}:</strong> {{ tempMaxC }}°C
      </p>
      <p>
        <strong>{{ $t("pressure") }}:</strong>
        {{ weatherDataDay.main.pressure }} {{ $t("hpa") }}
      </p>
      <p>
        <strong>{{ $t("humidity") }}:</strong>
        {{ weatherDataDay.main.humidity }}%
      </p>
      <p>
        <strong>{{ $t("cloudiness") }}:</strong>
        {{ weatherDataDay.clouds.all }}%
      </p>
      <p>
        <strong>{{ $t("description") }}:</strong>
        {{ translatedDescription }}
      </p>
      <p>
        <strong>{{ $t("wind") }}:</strong> {{ weatherDataDay.wind.speed }}
        {{ $t("ms") }}, {{ weatherDataDay.wind.deg }}°
      </p>
    </li>
  </ul>

  <ul v-else class="weekly-weather-list">
    <li
      v-for="(weather, idx) in weatherDataWeek"
      :key="idx"
      class="weekly-weather-item"
    >
      <p class="weekly-weather-day-text">{{ getDayOfWeek(weather.dayWeek) }}</p>
      <p class="weekly-temp">{{ weather.temp.toFixed(1) }}°C</p>
      <p class="weekly-description">
        {{
          $t(`weatherDescriptions.${weather.description}`) !==
          `weatherDescriptions.${weather.description}`
            ? $t(`weatherDescriptions.${weather.description}`)
            : weather.description
        }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    weatherDataDay: {
      type: Object,
      required: true,
    },
    weatherDataWeek: {
      type: Array,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getDayOfWeek(timestamp) {
      const date = new Date(timestamp * 1000);
      const weekday = date
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLowerCase();
      return this.$t(weekday);
    },
  },
  computed: {
    temperatureC() {
      return (this.weatherDataDay.main.temp - 273.15).toFixed(1);
    },
    feelsLikeC() {
      return (this.weatherDataDay.main.feels_like - 273.15).toFixed(1);
    },
    tempMinC() {
      return (this.weatherDataDay.main.temp_min - 273.15).toFixed(1);
    },
    tempMaxC() {
      return (this.weatherDataDay.main.temp_max - 273.15).toFixed(1);
    },
    formattedDate() {
      const date = new Date(this.weatherDataDay.dt * 1000);
      return date.toLocaleDateString("uk-UA");
    },
    day() {
      const date = new Date(this.weatherDataDay.dt * 1000);
      const weekday = date
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLowerCase();
      return this.$t(weekday);
    },
    translatedDescription() {
      const description = this.weatherDataDay.weather[0].description;
      return this.$t(`weatherDescriptions.${description}`);
    },

    isDay() {
      return this.$store.state.cities[this.index]?.regime === "day";
    },
  },
};
</script>

<style scoped>
.weather-card-list {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 35px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  display: flex;
  gap: 65px;
}

.weather-card-title {
  font-size: 22px;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
}

.weather-info {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 300px;
  font-size: 14px;
  color: #555;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.temperature-section {
  text-align: center;
  font-size: 20px;
  color: #212529;
  margin-bottom: 20px;
}

.temp-main {
  font-size: 36px;
  color: #ff6b6b;
  margin-bottom: 40px;
  font-weight: bold;
}

.weather-details-item {
  font-size: 16px;
  color: #444;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.weekly-weather-list {
  height: auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.weekly-weather-item {
  width: 150px;
  height: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
}

.weekly-weather-day-text {
  color: #555;
}

.weekly-temp {
  font-size: 32px;
  font-weight: bold;
  color: #ff6b6b;
}

.weekly-description {
  font-size: 20px;
  color: #555;
}

@media screen and (max-width: 768px) {
  .weather-card-list {
    padding: 20px;
    flex-direction: column;
    gap: 35px;
  }
  .weather-info {
    width: auto;
  }

  .weather-details-item {
    justify-content: center;
  }
}
</style>
