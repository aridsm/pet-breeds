<template>
  <div class="search-container">
    <form>
      <div class="input-container">
        <label for="name">Search for a breed</label>
        <input
          type="text"
          placeholder="Golden Retriever"
          id="name"
          v-model="inputValue"
        />
        <div class="select-option">
          <button type="button">{{ selectedPet }}</button>
          <div class="options">
            <label for="dogs" :class="{ active: selectedPet === 'dogs' }"
              >Dogs</label
            >
            <input
              type="radio"
              id="dogs"
              name="pet"
              value="dogs"
              v-model="selectedPet"
            />

            <label for="cats" :class="{ active: selectedPet === 'cats' }"
              >Cats</label
            >
            <input
              type="radio"
              id="cats"
              name="pet"
              value="cats"
              v-model="selectedPet"
            />
          </div>
        </div>
      </div>
      <button class="btn" type="submit">Search</button>
    </form>
    <ul class="results">
      <li v-for="pet in petsList" :key="pet.name">
        <router-link to="/"> {{ pet.name }} </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      petsList: [],
      inputValue: "",
      selectedPet: "dogs",
    };
  },
  methods: {
    fetchPetsBreeds() {
      axios
        .get(
          `https://api.api-ninjas.com/v1/${this.selectedPet}?max_height=9999&name=${this.inputValue}`,
          {
            headers: {
              "X-Api-Key": "e4cVT8BzEFD562z74IXKZg==qttxkrNa0ZYegkU8",
            },
          }
        )
        .then((d) => {
          this.petsList = d.data.slice(0, 9);
        });
    },
  },
  watch: {
    inputValue() {
      this.fetchPetsBreeds();
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
.input-container {
  margin-right: 0.5rem;
  flex: 1;
  position: relative;
}

.input-container input {
  width: 100%;
}

form input:focus {
  box-shadow: 0 0 0 1px var(--cor-3);
}

label[for="name"],
.options input {
  visibility: hidden;
  position: absolute;
}

.select-option {
  position: absolute;
  background: transparent;
  top: 0;
  right: 0;
  width: 3.4rem;
  padding: 0;
  height: 100%;
  color: var(--cor-3);
}

.select-option button {
  text-transform: uppercase;
  font-size: 10px;
  width: 100%;
  height: 100%;
}

.options {
  position: absolute;
  top: 100%;
  background: var(--cor-4);
  box-shadow: 0px 0px 50px rgba(203, 215, 189, 0.6);
  border-radius: 0.3rem;
  visibility: hidden;
  opacity: 0;
  transform: scale(0.9);
  transition: 0.2s;
  z-index: 9;
}

.options label {
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  transition: 0.2s;
  display: block;
}

.options label:hover,
.options label.active {
  color: var(--cor-5);
}

.select-option button:hover ~ .options,
.options:hover {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}
.search-container {
  position: relative;
}
.results {
  position: absolute;
  background: var(--cor-4);
  box-shadow: 0px 0px 50px rgba(203, 215, 189, 0.6);
  padding: 1rem;
  border-radius: 0.3rem;
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  max-height: 10rem;
  overflow: auto;
  color: var(--cor-3);
}

.results li + li {
  margin-top: 0.8rem;
}

.results li {
  transition: 0.2s;
}

.results a {
  width: 100%;
}

.results li:hover {
  color: var(--cor-5);
}
</style>
