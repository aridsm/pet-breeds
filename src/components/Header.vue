<template>
  <header class="container">
    <router-link to="/" id="logo-link">
      <span id="logo"></span>
      <span>Pets breeds</span>
    </router-link>
    <nav class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/dogs">Dogs</router-link></li>
        <li><router-link to="/cats">Cats</router-link></li>
      </ul>
    </nav>
    <button id="search"></button>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  height: 7rem;
}

.nav {
  margin-left: auto;
}

.nav li + li,
#search {
  margin-left: 2.5rem;
}
.nav a {
  transition: 0.2s;
}
.nav a:hover {
  color: var(--cor-1);
}

#search {
  background: url("../assets/search.svg") no-repeat center;
  width: 1.5rem;
  height: 1.5rem;
  background-size: 1rem;
}
#logo-link span {
  display: inline-block;
}
#logo-link {
  display: flex;
  align-items: center;
  font-weight: 800;
}
#logo {
  background: url("../assets/paw.svg") no-repeat center;
  background-size: 1.5rem;
  width: 2rem;
  height: 2rem;
  transition: 0.2s;
  margin-right: 0.5rem;
}

#logo-link:hover #logo {
  transform: rotate(-15deg);
}
</style>
