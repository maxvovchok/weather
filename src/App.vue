<template>
  <div class="container">
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
export default {
  components: { SwitchLanguages },
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
</style>
