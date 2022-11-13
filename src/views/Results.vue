<template>
  <main class="container main padding">
    <h1>
      Main results for <span>"{{ searchValue }}"</span> in
      <span>{{ selectedPet }}</span>
    </h1>
    <Loading v-if="loadingList && !listPets.length" class="load-spinner"
      >Loading</Loading
    >
    <ListPets
      v-if="!loadingList && listPets.length"
      :listPets="listPets"
      :categoryPet="selectedPet"
    />
    <p v-if="!loadingList && !listPets.length" class="error">No data found.</p>
  </main>
</template>

<script>
import axios from "axios";
import ListPets from "../components/utilities/ListPets.vue";
import Loading from "../components/utilities/Loading.vue";
import useHead from "../composables/useHead";

export default {
  data() {
    return {
      loadingList: false,
      listPets: [],
    };
  },
  setup() {
    const { changeHeaderData } = useHead();
    return { changeHeaderData };
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
      this.loadingList = true;
      this.listPets = [];
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
          this.listPets = d.data.slice(0, 19);
        });

      this.loadingList = false;
    },
  },
  created() {
    this.fetchPetsBreeds();
    this.changeHeaderData(
      `Results for "${this.searchValue}"`,
      `Main results for "${this.searchValue}" in "${this.selectedPet}"`
    );
  },
  components: {
    ListPets,
    Loading,
  },
};
</script>
>

<style scoped>
h1 span {
  color: var(--cor-1);
}

.load-spinner {
  min-height: calc(100vh - 12rem);
  display: grid;
  place-items: center;
}
</style>
