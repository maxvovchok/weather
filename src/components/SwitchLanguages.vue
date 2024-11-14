<template>
  <div>
    <button @click="changeLanguage('en')" class="languages-btn">En</button>
    /
    <button @click="changeLanguage('uk')" class="languages-btn">Укр</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
      localStorage.setItem("languages", language);
    },
  },
};
</script>

<style scoped>
.languages-btn {
  width: 30px;
  height: 30px;

  border: none;
  background: none;
  transition: 0.3s;
  border-radius: 50%;
}

.languages-btn:hover {
  background-color: aliceblue;
}
</style>
