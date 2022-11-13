<template>
  <div id="main-comp">
    <Header />
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
    <span class="hexagon" id="hexagon-1"></span>
    <span class="hexagon" id="hexagon-2"></span>
    <span class="triangle" id="triangle-1"></span>
    <span class="triangle" id="triangle-2"></span>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<style>
#main-comp {
  overflow: hidden;
  position: relative;
}
.hexagon {
  background: url("./assets/hexagon.svg") no-repeat center;
  position: absolute;
  z-index: -1;
}

#hexagon-1 {
  bottom: -5rem;
  left: -5rem;
  transform: rotate(-10deg);
  background-size: 14rem;
  height: 16rem;
  width: 16rem;
}
#hexagon-2 {
  top: -4rem;
  right: -3rem;
  transform: rotate(10deg);
  background-size: 8rem;
  height: 10rem;
  width: 10rem;
}

.triangle {
  background: url("./assets/triangle.svg") no-repeat center;
  position: absolute;
  background-size: 1.6rem;
  height: 1.6rem;
  width: 1.6rem;
  z-index: -1;
}

#triangle-1 {
  top: 25vh;
  left: 9%;
  transform: rotate(45deg);
}

#triangle-2 {
  bottom: 18vh;
  right: 11%;
  transform: rotate(-20deg);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
.v-enter-active,
.v-leave-active {
  transition: 0.2s;
}

@media (max-width: 600px) {
  #hexagon-1 {
    background-size: 10rem;
    height: 12rem;
    width: 12rem;
  }
  .triangle {
    background-size: 1rem;
    height: 1rem;
    width: 1rem;
  }
  #triangle-1 {
    top: 18rem;
  }
}
</style>
