import { createStore } from "vuex";

export default createStore({
  state: {
    cities: [
      {
        id: 1,
        citySuggestions: null,
        hourlyRate: null,
        weeklyWeather: null,
        regime: "day",
      },
    ],
    isLoading: false,
    isFirstCitySelected: false,
  },
  mutations: {
    setCitySuggestions(state, { index, city }) {
      if (state.cities[index]) {
        state.cities[index].citySuggestions = city;
      }
    },
    setGetHourlyRate(state, { index, hourlyRate }) {
      if (state.cities[index]) {
        state.cities[index].hourlyRate = hourlyRate;
        state.isFirstCitySelected = true;
      }
    },
    seWeeklyWeather(state, { index, weeklyWeather }) {
      if (state.cities[index]) {
        state.cities[index].weeklyWeather = weeklyWeather;
      }
    },
    setRegime(state, { index, regime }) {
      if (state.cities[index]) {
        state.cities[index].regime = regime;
      }
    },
    incrementBlocks(state) {
      if (state.cities.length < 5) {
        state.cities.push({
          id: state.cities.length + 1,
          citySuggestions: null,
          hourlyRate: null,
        });
        state.isFirstCitySelected = false;
      }
    },
    removeBlock(state, index) {
      if (state.cities.length > 1) {
        state.cities.splice(index, 1);
      }
      state.isFirstCitySelected = true;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    setLoading({ commit }, isLoading) {
      commit("setLoading", isLoading);
    },
  },
});
