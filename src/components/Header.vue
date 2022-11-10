<template>
  <header :class="{ scrolled: didPageScroll }">
    <div class="container">
      <router-link to="/" id="logo-link">
        <span id="logo"></span>
        <span>Pets breeds</span>
      </router-link>
      <nav class="nav" v-show="!searchFieldShown">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/dogs">Dogs</router-link></li>
          <li><router-link to="/cats">Cats</router-link></li>
        </ul>
      </nav>
      <button
        id="search"
        v-show="!searchFieldShown"
        @click="showSearchField"
      ></button>
      <transition>
        <SearchBreeds
          class="form"
          classBtn="btnHeader"
          el="header"
          v-show="searchFieldShown"
        />
      </transition>
    </div>
  </header>
</template>

<script>
import SearchBreeds from "./utilities/SearchBreeds.vue";
export default {
  data() {
    return {
      didPageScroll: false,
      searchFieldShown: false,
    };
  },
  components: { SearchBreeds },
  methods: {
    checkPageScroll() {
      if (window.scrollY > 0) {
        this.didPageScroll = true;
      } else {
        this.didPageScroll = false;
      }
    },
    showSearchField() {
      this.searchFieldShown = true;
    },
    checkOutsideClick(e) {
      const searchBtn = this.$el.querySelector("#search");
      const form = this.$el.querySelector(".form");

      function wasOutsideClick(el) {
        return e.target !== el && !el.contains(e.target);
      }

      if (wasOutsideClick(searchBtn) && wasOutsideClick(form)) {
        this.searchFieldShown = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkPageScroll);
    window.addEventListener("click", this.checkOutsideClick);
  },
  unmounted() {
    window.removeEventListener("scroll", this.checkPageScroll);
    window.removeEventListener("click", this.checkOutsideClick);
  },
};
</script>

<style scoped>
header .container {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
}

header {
  position: fixed;
  width: 100%;
  z-index: 99;
  height: 7rem;
  transition: 0.2s;
  background: transparent;
}

header.scrolled {
  height: 4rem;
  background: var(--cor-2);
  border-bottom: 1px solid rgb(193, 204, 210);
}

.nav {
  margin-left: auto;
}

.nav li + li,
#search {
  margin-left: 2.5rem;
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
.nav a {
  position: relative;
  transition: 0.2s;
}
.nav a:hover {
  color: var(--cor-1);
}
.nav .router-link-active::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -0.2rem;
  width: 60%;
  height: 2px;
  background: currentColor;
}

.form {
  position: absolute;
  right: 0;
  max-height: 2.6rem;
}
</style>
