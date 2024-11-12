import { createStore } from "vuex";

export default createStore({
  state: {
    citySuggestions: null,
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
  },
  actions: {},
  modules: {},
});
