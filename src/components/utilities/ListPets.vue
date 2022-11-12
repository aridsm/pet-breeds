<template>
  <ul class="list">
    <li v-for="breed in listPets" :key="breed.name">
      <router-link :to="`/${categoryPet}/${breed.name}`" class="link bg-style">
        <div class="img-div">
          <img :src="breed.image_link" :alt="breed.name" />
        </div>
        <p class="breed-name">
          {{ breed.name }}
        </p>
      </router-link>
    </li>
  </ul>
</template>

<script>
import Loading from "./Loading.vue";

export default {
  components: { Loading },
  props: ["listPets", "categoryPet"],
};
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-auto-rows: 270px;
  grid-gap: 0.7rem;
  margin-top: 2rem;
}

.list li,
.link,
.img-div img {
  width: 100%;
  height: 100%;
}

.link {
  padding: 0.5rem;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
}
.link:hover {
  box-shadow: 0px 0px 30px rgba(203, 215, 189, 0.8);
  background: var(--cor-4);
  transform: translateY(-0.2rem);
}
.img-div {
  width: 100%;
  height: 220px;
}

.img-div img {
  object-fit: cover;
  object-position: top;
  border-radius: 0.2rem;
  border: 1px solid rgba(203, 215, 189, 0.6);
}

.breed-name {
  margin: 0.7rem auto auto auto;
}

@media (max-width: 520px) {
}
</style>
