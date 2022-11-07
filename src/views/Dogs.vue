<template>
  <main class="container main">
    <h1>Dog <span>breeds</span></h1>
    <ul v-if="dogsList.length" class="list">
      <li v-for="dog in dogsList" :key="dog.name" class="pet-item">
        <router-link to="/">
          <img :src="dog.image_link" :alt="dog.name" />
          <p>{{ dog.name }}</p>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dogsList: [],
    };
  },
  methods: {
    fetchDogs() {
      axios
        .get(`https://api.api-ninjas.com/v1/dogs?max_height=9999`, {
          headers: {
            "X-Api-Key": "e4cVT8BzEFD562z74IXKZg==qttxkrNa0ZYegkU8",
          },
        })
        .then((list) => (this.dogsList = list.data));
    },
  },
  mounted() {
    this.fetchDogs();
  },
};
</script>

<style scoped>
h1 {
  font-size: 2.4rem;
  margin-top: 1rem;
}
h1 span {
  color: var(--cor-1);
}
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  margin-top: 3rem;
}

.pet-item {
  border-radius: 0.2rem;
  position: relative;
  overflow: hidden;
}

.pet-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.2s;
  filter: grayscale(15%);
}

.pet-item a {
  height: 100%;
}

.pet-item p {
  position: absolute;
  bottom: -3rem;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  color: var(--cor-2);
  transition: 0.2s;
  background: #2e2d60;
}

.pet-item:hover p {
  bottom: 0;
}

.pet-item:hover img {
  transform: scale(1.2);
  filter: initial;
}
</style>
