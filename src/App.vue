<template>
  <div class="container">
    <header class="header">
      <nav class="header-nav">
        <router-link class="nav-menu-link" to="/">Home</router-link>
        <router-link class="nav-menu-link" to="/selected">Selected</router-link>
      </nav>
    </header>
    <hr class="header-hr" />
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
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
  padding: 10px 30px 10px 30px;
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
