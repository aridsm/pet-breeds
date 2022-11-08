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

      <form class="form">
        <input type="text" placeholder="Golden Retriever" />
        <button class="btn">Search</button>
      </form>
    </div>
    <div class="flex-2 img">
      <img src="../assets/dog.svg" />
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      catsList: [],
      dogsList: [],
    };
  },
  methods: {
    fetchPetsBreeds() {
      axios
        .get(`https://api.api-ninjas.com/v1/dogs?max_height=9999`, {
          headers: {
            "X-Api-Key": "e4cVT8BzEFD562z74IXKZg==qttxkrNa0ZYegkU8",
          },
        })
        .then((data) => console.log(data));
    },
  },
  mounted() {
    this.fetchPetsBreeds();
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7rem;
}
.flex-1,
.flex-2 {
  margin-top: -2rem;
}
.flex-2 img {
  width: 14rem;
}

.img,
h1 {
  margin-top: -6rem;
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
  font-size: 3.6rem;
  font-weight: 800;
}

h1 span {
  color: var(--cor-1);
}

.form {
  margin-top: 3rem;
  display: flex;
  width: 90%;
}

.form input {
  margin-right: 0.5rem;
  flex: 1;
}

.form input:focus {
  box-shadow: 0 0 0 1px var(--cor-3);
}
.description {
  color: var(--cor-3);
  margin-top: 1rem;
}
</style>
