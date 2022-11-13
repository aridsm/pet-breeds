<template>
  <h1>{{ pet }} <span>breeds</span></h1>
  <Loading v-if="loadingList && !petList.length" class="load-spinner"
    >Loading</Loading
  >
  <ListPets
    v-if="petList.length"
    :listPets="petList"
    :categoryPet="categoryPet"
  />
  <button
    class="btn load-more"
    @click="loadMore"
    :disabled="loadingButton || loadingList"
  >
    {{ loadingButton ? "Loading more..." : "Load more" }}
  </button>
  <button
    @click="scrollToTop"
    class="scroll-btn bg-style"
    title="Scroll to top"
  ></button>
</template>

<script>
import axios from "axios";
import Loading from "../components/utilities/Loading.vue";
import ListPets from "../components/utilities/ListPets.vue";
import useHead from "../composables/useHead";

export default {
  data() {
    return {
      petList: [],
      loadingList: false,
      loadingButton: false,
      offset: 0,
    };
  },
  setup() {
    const { changeHeaderData } = useHead();
    return { changeHeaderData };
  },
  components: { Loading, ListPets },
  computed: {
    categoryPet() {
      return this.$route.path.slice(1);
    },
    pet() {
      return (
        this.categoryPet.charAt(0).toUpperCase() + this.categoryPet.slice(1)
      ).slice(0, -1);
    },
  },
  methods: {
    async fetchPets() {
      this.loadingList = true;
      await axios
        .get(
          `https://api.api-ninjas.com/v1/${this.categoryPet}?max_weight=9999&offset=${this.offset}`,
          {
            headers: {
              "X-Api-Key": "e4cVT8BzEFD562z74IXKZg==qttxkrNa0ZYegkU8",
            },
          }
        )
        .then((list) => {
          this.petList = this.petList.concat(list.data);
          this.loadingList = false;
        });
    },
    async loadMore() {
      this.offset += 20;
      this.loadingButton = true;
      await this.fetchPets();
      this.loadingButton = false;
    },
    scrollToTop() {
      window.scroll({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    this.fetchPets();
    this.changeHeaderData(`${this.pet} List`, `List for ${this.pet} breeds`);
  },
};
</script>

<style scoped>
.load-more {
  margin: 3rem auto 0 auto;
  display: block;
}

.load-more:disabled {
  background: var(--cor-3);
  cursor: progress;
}

.scroll-btn {
  position: fixed;
  bottom: 5%;
  right: 5%;
  background-image: url("../assets/arrow.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0.7rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.load-spinner {
  min-height: calc(100vh - 12rem);
  display: grid;
  place-items: center;
}
</style>
