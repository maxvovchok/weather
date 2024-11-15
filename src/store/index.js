import { createStore } from "vuex";

export default createStore({
  state: {
    cities: [
      {
        id: 1,
        citySuggestions: null,
        hourlyRate: null,
        weeklyWeather: [],
        regime: "day",
        dayData: [],
        nightData: [],
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

    setDayNightData(state, { index, regime, data }) {
      if (state.cities[index]) {
        if (regime === "day") {
          state.cities[index].dayData = data;
        } else if (regime === "night") {
          state.cities[index].nightData = data;
        }
      }
    },
  },
  actions: {
    setLoading({ commit }, isLoading) {
      commit("setLoading", isLoading);
    },
  },
});
