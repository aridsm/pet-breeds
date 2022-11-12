<template>
  <div class="search-container">
    <form :id="formId" @submit.prevent="searchBreeds">
      <div class="input-container">
        <label :for="inputId">Search for a breed</label>
        <input
          type="text"
          :placeholder="
            selectedPet === 'dogs' ? 'Golden Retriever' : 'Maine Coon'
          "
          :id="inputId"
          v-model="inputValue"
          class="bg-style"
        />
        <div class="select-option">
          <button type="button">{{ selectedPet }}</button>
          <div class="options bg-style">
            <label :for="dogInputId" :class="{ active: selectedPet === 'dogs' }"
              >Dogs</label
            >
            <input
              type="radio"
              :id="dogInputId"
              :name="nameRadios"
              value="dogs"
              v-model="selectedPet"
            />

            <label :for="catInputId" :class="{ active: selectedPet === 'cats' }"
              >Cats</label
            >
            <input
              type="radio"
              :id="catInputId"
              :name="nameRadios"
              value="cats"
              v-model="selectedPet"
            />
          </div>
        </div>
      </div>
      <button class="btn" :class="{ btnHeader: classBtn }" type="submit">
        Search
      </button>
    </form>
    <transition>
      <div v-if="inputValue.length" class="results">
        <Loading v-if="loadingPets" class="load-spinner" />
        <ul v-if="petsList.length">
          <li v-for="pet in petsList" :key="pet.name">
            <router-link :to="`/${selectedPet}/${pet.name}`">
              {{ pet.name }}
            </router-link>
          </li>
        </ul>
        <p v-if="!loadingPets && !petsList.length">No data found</p>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "./Loading.vue";

export default {
  data() {
    return {
      petsList: [],
      inputValue: "",
      selectedPet: "dogs",
      loadingPets: false,
    };
  },
  props: ["classBtn", "el"],
  components: { Loading },
  computed: {
    formId() {
      return "form-" + this.el;
    },
    inputId() {
      return "name-" + this.el;
    },
    catInputId() {
      return "cat-" + this.el;
    },
    dogInputId() {
      return "dog-" + this.el;
    },
    nameRadios() {
      return "pets-" + this.el;
    },
  },
  methods: {
    async fetchPetsBreeds() {
      this.loadingPets = true;
      this.petsList = [];
      await axios
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

      this.loadingPets = false;
    },
    checkOutsideClick(e) {
      const form = this.$el.querySelector(`#${this.formId}`);
      if (e.target !== form && !form.contains(e.target)) {
        this.inputValue = "";
      }
    },
    searchBreeds() {
      console.log(this.$route);
      this.$router.push({
        path: "/results",
        query: { breed: this.inputValue, pet: this.selectedPet },
      });
    },
  },
  watch: {
    inputValue() {
      this.fetchPetsBreeds();
    },
    selectedPet() {
      this.fetchPetsBreeds();
    },
  },
  mounted() {
    window.addEventListener("click", this.checkOutsideClick);
  },
  unmounted() {
    window.removeEventListener("click", this.checkOutsideClick);
  },
};
</script>

<style scoped>
form {
  display: flex;
  position: relative;
  z-index: 3;
  height: 100%;
}
.input-container {
  margin-right: 0.5rem;
  flex: 1;
  height: 100%;
  position: relative;
}

.input-container input {
  width: 100%;
  height: 100%;
}

form input:focus {
  box-shadow: 0 0 0 1px var(--cor-3);
}

.input-container > label,
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
  height: 100%;
}
.results {
  position: absolute;
  background: var(--cor-4);
  box-shadow: 0px 0px 50px rgba(203, 215, 189, 0.6);
  padding: 1rem;
  border-radius: 0.3rem;
  width: 100%;
  margin-top: 0.5rem;
  max-height: 10rem;
  overflow: auto;
  color: var(--cor-3);
  display: grid;
}

.load-spinner {
  padding: 2rem;
  margin: 0 auto;
}
.results ul {
  display: flex;
  flex-direction: column;
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

.btnHeader {
  padding: 0.5rem 1.2rem;
}
</style>
