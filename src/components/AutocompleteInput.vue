<template>
  <div class="autocomplete-input">
    <MyInput v-model="query" :placeholder="$t('placeholderInput')" />
    <ul class="city-list" v-if="suggestions.length && query.length > 2">
      <li
        class="city-item"
        v-for="(suggestion, index) in suggestions"
        :key="index"
        @click="selectCity(suggestion)"
      >
        {{ suggestion.fullName }}
      </li>
    </ul>
  </div>
</template>

<script>
import MyInput from "@/UI/MyInput.vue";
import { getCitySuggestions, getHourlyRate } from "@/service/index.js";

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  components: {
    MyInput,
  },
  data() {
    return {
      query: "",
      suggestions: [],
      ignoreWatch: false,
    };
  },
  watch: {
    query(newQuery) {
      if (this.ignoreWatch) {
        this.ignoreWatch = false;
        return;
      }
      if (newQuery.length > 2) {
        this.getCitySuggestions(newQuery);
      } else {
        this.suggestions = [];
      }
    },
  },
  methods: {
    async getCitySuggestions(query) {
      try {
        this.suggestions = await getCitySuggestions(query);
      } catch (error) {
        console.error("Failed to fetch city suggestions", error);
      }
    },
    selectCity(suggestion) {
      this.$store.dispatch("setLoading", true);
      this.query = suggestion.fullName;
      this.suggestions = [];
      this.ignoreWatch = true;

      this.$store.commit("setCitySuggestions", {
        index: this.index,
        city: suggestion.city,
      });

      getHourlyRate(this.query)
        .then((res) => {
          this.$store.commit("setGetHourlyRate", {
            index: this.index,
            hourlyRate: res,
          });
        })
        .catch((error) => {
          console.error("Failed to fetch hourly rate:", error);
        })
        .finally(() => {
          this.$store.dispatch("setLoading", false);
        });

      this.$store.commit("setRegime", { index: this.index, regime: "day" });
    },
  },
};
</script>

<style scoped>
.autocomplete-input {
  margin-bottom: 40px;
}
.city-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid rgb(203, 203, 203);
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: none;
  width: 302px;
  background-color: white;
  position: absolute;
  z-index: 10;
}
.city-item {
  padding: 5px 10px;
  cursor: pointer;
}
.city-item:hover {
  background-color: #f0f0f0;
}

@media screen and (max-width: 768px) {
  .autocomplete-input {
    width: 300px;
  }
}
</style>
