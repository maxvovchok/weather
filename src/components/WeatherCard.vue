<template>
  <ul class="weather-card-list">
    <li class="weather-main-item">
      <h2 class="weather-card-title">
        {{ weatherData.name }}, {{ weatherData.sys.country }}
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
        {{ weatherData.main.pressure }} {{ $t("hpa") }}
      </p>
      <p>
        <strong>{{ $t("humidity") }}:</strong> {{ weatherData.main.humidity }}%
      </p>
      <p>
        <strong>{{ $t("cloudiness") }}:</strong> {{ weatherData.clouds.all }}%
      </p>
      <p>
        <strong>{{ $t("description") }}:</strong>
        {{ translatedDescription }}
      </p>
      <p>
        <strong>{{ $t("wind") }}:</strong> {{ weatherData.wind.speed }}
        {{ $t("ms") }}, {{ weatherData.wind.deg }}°
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    weatherData: {
      type: Object,
      required: true,
    },
  },

  computed: {
    temperatureC() {
      return (this.weatherData.main.temp - 273.15).toFixed(1);
    },
    feelsLikeC() {
      return (this.weatherData.main.feels_like - 273.15).toFixed(1);
    },
    tempMinC() {
      return (this.weatherData.main.temp_min - 273.15).toFixed(1);
    },
    tempMaxC() {
      return (this.weatherData.main.temp_max - 273.15).toFixed(1);
    },
    formattedDate() {
      const date = new Date(this.weatherData.dt * 1000);
      return date.toLocaleDateString("uk-UA");
    },
    day() {
      const date = new Date(this.weatherData.dt * 1000);
      const weekday = date
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLowerCase();
      return this.$t(weekday);
    },
    translatedDescription() {
      const description = this.weatherData.weather[0].description;
      return this.$t(`weatherDescriptions.${description}`);
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

.weather-main-item {
  min-width: 300px;
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
</style>
