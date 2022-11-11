<template>
  <main class="container main padding">
    <h1>
      Results for <span>"{{ searchValue }}"</span> in
      <span>{{ selectedPet }}</span>
    </h1>
    <ul v-if="listBreeds.length">
      <li v-for="breed in listBreeds" :key="breed.name">
        <router-link to="/">
          <img :src="breed.image_link" :alt="breed.name" />
          <p>{{ breed.name }}</p>
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
      listBreeds: [],
      loadingPets: false,
    };
  },
  computed: {
    searchValue() {
      return this.$route.query.breed;
    },
    selectedPet() {
      return this.$route.query.pet;
    },
  },
  methods: {
    async fetchPetsBreeds() {
      this.loadingPets = true;
      this.listBreeds = [];
      await axios
        .get(
          `https://api.api-ninjas.com/v1/${this.selectedPet}?max_height=9999&name=${this.searchValue}`,
          {
            headers: {
              "X-Api-Key": "e4cVT8BzEFD562z74IXKZg==qttxkrNa0ZYegkU8",
            },
          }
        )
        .then((d) => {
          this.listBreeds = d.data.slice(0, 19);
        });

      this.loadingPets = false;
    },
  },
  created() {
    this.fetchPetsBreeds();
  },
};
</script>
>

<style scoped>
h1 span {
  color: var(--cor-1);
}
</style>
