<template>
  <ul class="weather-toggle-list">
    <li>
      <MyButton
        :styles="{ backgroundColor: 'aliceblue' }"
        :hoverStyles="{ backgroundColor: 'rgb(139, 139, 250)' }"
        @click="setDayView"
      >
        {{ $t("day") }}
      </MyButton>
    </li>
    <li>
      <MyButton
        :styles="{ backgroundColor: 'aliceblue' }"
        :hoverStyles="{ backgroundColor: 'rgb(139, 139, 250)' }"
        @click="setWeekView"
      >
        {{ $t("week") }}
      </MyButton>
    </li>
  </ul>
</template>

<script>
import { MyButton } from "@/UI";
export default {
  components: {
    MyButton,
  },
};
</script>

<style>
.weather-toggle-list {
  padding: 0;
  display: flex;
  gap: 20px;
}
</style>
