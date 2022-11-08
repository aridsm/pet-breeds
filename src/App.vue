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

<style scoped>
#main-comp {
  overflow: hidden;
  position: relative;
}
.hexagon {
  background: url("./assets/hexagon.svg") no-repeat center;
  position: absolute;
}

#hexagon-1 {
  bottom: -10%;
  left: -7rem;
  transform: rotate(-10deg);
  background-size: 14rem;
  height: 16rem;
  width: 16rem;
}
#hexagon-2 {
  top: -10%;
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
}

#triangle-1 {
  top: 20%;
  left: 9%;
  transform: rotate(45deg);
}

#triangle-2 {
  bottom: 15%;
  right: 11%;
  transform: rotate(-20deg);
}
</style>
