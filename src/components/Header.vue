<template>
  <header :class="{ scrolled: didPageScroll }">
    <div class="container">
      <router-link to="/" id="logo-link">
        <span id="logo"></span>
        <span>Pets breeds</span>
      </router-link>
      <button
        @click="toggleMenu"
        class="btn-menu"
        :class="{ active: showMenu }"
        :title="showMenu ? 'Close menu' : 'Open menu'"
      ></button>
      <nav
        v-show="!searchFieldShown && showMenu"
        class="nav"
        :class="{ ['bg-style']: isMobile }"
      >
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
        title="Open search field"
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
      isMenuShown: false,
      isMobile: null,
    };
  },
  computed: {
    showMenu() {
      return (this.isMobile && this.isMenuShown) || !this.isMobile;
    },
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
    toggleMenu() {
      this.isMenuShown = !this.isMenuShown;
    },
    checkWindowWidth() {
      if (window.innerWidth < 500) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkPageScroll);
    window.addEventListener("click", this.checkOutsideClick);
    window.addEventListener("resize", this.checkWindowWidth);
    this.checkWindowWidth();
  },
  unmounted() {
    window.removeEventListener("scroll", this.checkPageScroll);
    window.removeEventListener("click", this.checkOutsideClick);
    window.removeEventListener("resize", this.checkWindowWidth);
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
  border-bottom: 1px solid rgba(203, 215, 189, 0.6);
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
  right: 1.2rem;
  max-height: 2.6rem;
}
.btn-menu {
  display: none;
}
@media (max-width: 500px) {
  .btn-menu {
    display: block;
    margin-left: auto;
    background-image: url("../assets/menu.svg");
    background-size: 1rem;
    background-repeat: no-repeat;
    background-position: center;
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 0.2rem;
  }

  .btn-menu.active {
    box-shadow: 0 0 0 2px var(--cor-1);
  }

  .nav {
    position: absolute;
    right: 1.2rem;
    top: 4.5rem;
    border-radius: 0.2rem;
  }

  .nav li {
    display: block;
    padding: 0.7rem 1.4rem;
  }

  .nav li + li {
    margin-left: 0;
  }
  .nav .router-link-active::after {
    display: none;
  }

  .nav .router-link-active {
    color: var(--cor-1);
  }

  #search {
    margin-left: 1.5rem;
  }
}
</style>
