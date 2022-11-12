<template>
  <main class="container main padding">
    <div class="flex-1">
      <h1>
        Search for a cat <br />
        or dog <span>breed!</span>
      </h1>
      <p class="description">
        Data for more than 400 cat and <br />
        dog breeds
      </p>
      <SearchBreeds class="form" el="home" />
    </div>
    <div class="flex-2 img">
      <img src="../assets/dog.svg" />
    </div>
  </main>
</template>

<script>
import SearchBreeds from "../components/utilities/SearchBreeds.vue";

export default {
  created() {
    document.title = "Home | Pet breeds";
  },
  components: { SearchBreeds },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 9rem;
}
.flex-1,
.flex-2 {
  margin-top: -2rem;
}
.flex-2 img {
  width: 14.5rem;
}

.img,
h1 {
  margin-top: -7rem;
}
.img {
  position: relative;
}
.img::after {
  content: "";
  display: block;
  position: absolute;
  top: 1rem;
  right: -6rem;
  height: 22rem;
  width: 22rem;
  background: url("../assets/hexagon.svg") no-repeat center;
  background-size: 19rem;
  transform: rotate(30deg);
  z-index: -1;
}

h1 {
  font-size: 3.7rem;
  font-weight: 800;
}

h1 span {
  color: var(--cor-1);
}

.description {
  color: var(--cor-3);
  margin-top: 1rem;
}

.form {
  margin-top: 3rem;
  width: 90%;
}
@media (max-width: 1000px) {
  .main {
    justify-content: center;
  }

  .flex-1 {
    margin-right: 4rem;
  }
}
@media (max-width: 860px) {
  h1 {
    font-size: 3.2rem;
    text-align: center;
  }

  .description {
    text-align: center;
  }
  .main {
    flex-direction: column;
    align-items: center;
  }
  .flex-1,
  .flex-2 {
    margin-top: 0;
  }

  .flex-2 {
    margin-top: 4rem;
  }
  .flex-1 {
    margin-right: 0;
  }
  .form {
    margin-left: auto;
    margin-right: auto;
  }
  .img::after {
    right: -5rem;
    height: 22rem;
    width: 22rem;
    background-size: 17rem;
  }
}
@media (max-width: 490px) {
  h1 {
    font-size: 2.4rem;
  }
  .form {
    width: 100%;
  }
}
</style>
