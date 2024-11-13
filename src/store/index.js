import { createStore } from "vuex";

export default createStore({
  state: {
    citySuggestions: null,
    hourlyRate: null,
  },
  getters: {
    citySuggestions(state) {
      return state.citySuggestions;
    },
  },
  mutations: {
    setCitySuggestions(state, suggestions) {
      state.citySuggestions = suggestions;
    },

    setGetHourlyRate(state, suggestions) {
      state.hourlyRate = suggestions;
    },
  },
  actions: {},
  modules: {},
});
