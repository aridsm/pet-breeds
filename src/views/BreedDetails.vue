<template>
  <main class="container main">
    {{ breedDetails }}
  </main>
</template>

<script>
import axios from "axios";

export default {
  props: ["breed"],
  data() {
    return {
      breedDetails: [],
      loadingDetails: false,
    };
  },
  computed: {
    pet() {
      return this.$route.name;
    },
  },
  methods: {
    async fetchBreedDetails() {
      this.loadingDetails = true;
      await axios
        .get(`https://api.api-ninjas.com/v1/dogs?name=${this.breed}`, {
          headers: {
            "X-Api-Key": "e4cVT8BzEFD562z74IXKZg==qttxkrNa0ZYegkU8",
          },
        })
        .then((breed) => {
          this.breedDetails = breed.data;
          this.loadingDetails = false;
        });
    },
  },
  mounted() {
    this.fetchBreedDetails();
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
    },
  },
};
</script>

<style></style>
