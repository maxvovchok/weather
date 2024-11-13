<template>
  <MyButton
    :styles="{ backgroundColor: 'aliceblue' }"
    :hoverStyles="{ backgroundColor: 'rgb(139, 139, 250)' }"
    :handleClick="addLocalStorage"
    >Обране</MyButton
  >

  <ModalWindow :show="showWarningModal" @close="showWarningModal = false">
    <h2 class="modal-title">Місто вже додане до обраних міст</h2>
    <MyButton
      :styles="{ backgroundColor: 'aliceblue' }"
      :hoverStyles="{ backgroundColor: 'rgb(139, 139, 250)' }"
      :handleClick="
        () => {
          showWarningModal = false;
        }
      "
      >Закрити</MyButton
    >
  </ModalWindow>

  <ModalWindow :show="showSuccessModal" @close="showSuccessModal = false">
    <h2 class="modal-title">Місто успішно додано до обраних</h2>
    <MyButton
      :styles="{ backgroundColor: 'aliceblue' }"
      :hoverStyles="{ backgroundColor: 'rgb(139, 139, 250)' }"
      :handleClick="
        () => {
          showSuccessModal = false;
        }
      "
      >Закрити</MyButton
    >
  </ModalWindow>
</template>

<script>
import { MyButton, ModalWindow } from "@/UI";

export default {
  props: {
    cities: {
      type: Object,
    },
  },
  data() {
    return {
      selectedBlocks: [],
      showWarningModal: false,
      showSuccessModal: false,
    };
  },
  components: {
    MyButton,
    ModalWindow,
  },
  methods: {
    addLocalStorage() {
      if (!this.checkingAddedCity(this.cities)) {
        const storedCities = localStorage.getItem("cities")
          ? JSON.parse(localStorage.getItem("cities"))
          : [];

        storedCities.push(this.cities);
        localStorage.setItem("cities", JSON.stringify(storedCities));
        this.showSuccessModal = true;
      } else {
        this.showWarningModal = true;
      }
    },

    checkingAddedCity(city) {
      const storedCities = localStorage.getItem("cities")
        ? JSON.parse(localStorage.getItem("cities"))
        : [];

      return storedCities.some(
        (storedCity) =>
          storedCity.citySuggestions &&
          storedCity.citySuggestions.coord.lat ===
            city.citySuggestions.coord.lat &&
          storedCity.citySuggestions.coord.lon ===
            city.citySuggestions.coord.lon
      );
    },
  },
};
</script>

<style></style>
