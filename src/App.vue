<template>
  <div id="main-comp">
    <Header />
    <router-view></router-view>
    <Footer />
    <span class="hexagon" id="hexagon-1"></span>
    <span class="hexagon" id="hexagon-2"></span>
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
  background-size: 15rem;
  height: 18rem;
  width: 18rem;
}
#hexagon-2 {
  top: -10%;
  right: -3rem;
  transform: rotate(10deg);
  background-size: 8rem;
  height: 10rem;
  width: 10rem;
}
</style>
