<template>
  <main class="container main">
    <h1>{{ pet }} <span>breeds</span></h1>
    <p v-if="loadingList">Loading</p>
    <ul v-if="petList.length" class="list">
      <li v-for="dog in petList" :key="dog.name" class="pet-item">
        <router-link :to="`/${dog.name}`">
          <img :src="dog.image_link" :alt="dog.name" />
          <p>{{ dog.name }}</p>
        </router-link>
      </li>
    </ul>
    <button
      class="btn load-more"
      @click="loadMore"
      :disabled="loadingButton || loadingList"
    >
      {{ loadingButton ? "Loading more..." : "Load more" }}
    </button>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      petList: [],
      loadingList: true,
      loadingButton: false,
      offset: 0,
    };
  },
  computed: {
    pet() {
      return this.$route.name;
    },
  },
  methods: {
    async fetchPets() {
      this.loadingList = true;
      await axios
        .get(
          `https://api.api-ninjas.com/v1/${this.pet}?max_weight=9999&offset=${this.offset}`,
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
  },
  mounted() {
    this.fetchPets();
  },
};
</script>

<style>
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
  grid-auto-rows: 180px;
  grid-gap: 0.7rem;
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
}

.pet-item a {
  width: 100%;
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

.load-more {
  margin: 3rem auto 0 auto;
  display: block;
}

.load-more:disabled {
  background: var(--cor-3);
  cursor: progress;
}
</style>
