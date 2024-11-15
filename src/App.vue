<template>
  <div class="container">
    <loading v-model:active="$store.state.isLoading" />
    <header class="header">
      <nav class="header-nav">
        <router-link class="nav-menu-link" to="/">{{ $t("home") }}</router-link>
        <router-link class="nav-menu-link" to="/selected">{{
          $t("selected")
        }}</router-link>
      </nav>
      <SwitchLanguages></SwitchLanguages>
    </header>
    <hr class="header-hr" />
    <router-view />
  </div>
</template>

<script>
import { SwitchLanguages } from "@/components/index.js";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
export default {
  components: { SwitchLanguages, Loading },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
li {
  list-style: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px 0 20px;
}

.header {
  padding: 5px 30px 5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-nav {
  display: flex;
  gap: 40px;
}

.nav-menu-link {
  text-decoration: none;
  color: rgb(57, 57, 57);
  transition: 0.3s;
}

.nav-menu-link:hover {
  color: rgb(79, 79, 255);
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0px 15px;
  }

  .header-nav {
    gap: 20px;
  }

  .nav-menu-link {
    font-size: 16px;
    padding: 8px 0;
  }
}
</style>
