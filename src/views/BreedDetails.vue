<template>
  <Loading v-if="loadingDetails"></Loading>
  <div v-if="breedDetails" class="container-breed">
    <div class="flex-1">
      <h1>{{ breedDetails.name }}</h1>
      <ul>
        <li
          v-for="(value, propName) in breedDetailsList"
          :key="propName"
          class="item"
        >
          <p>{{ fixKeyName(propName) }}:</p>
          <span>{{ fixValue(value, propName) }}</span>
        </li>
      </ul>
    </div>
    <div class="flex-2">
      <img :src="breedDetails.image_link" :alt="breedDetails.name" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "../components/utilities/Loading.vue";

export default {
  components: { Loading },
  data() {
    return {
      breedDetails: [],
      loadingDetails: false,
    };
  },
  computed: {
    pet() {
      return this.$route.params.pet;
    },
    breed() {
      return this.$route.params.breed;
    },
    breedDetailsList() {
      const newBreedDetails = { ...this.breedDetails };
      delete newBreedDetails["image_link"];
      delete newBreedDetails["name"];
      return newBreedDetails;
    },
  },
  methods: {
    async fetchBreedDetails() {
      this.loadingDetails = true;
      await axios
        .get(`https://api.api-ninjas.com/v1/${this.pet}?name=${this.breed}`, {
          headers: {
            "X-Api-Key": "e4cVT8BzEFD562z74IXKZg==qttxkrNa0ZYegkU8",
          },
        })
        .then((breed) => {
          this.breedDetails = breed.data[0];
          this.loadingDetails = false;
        });
    },
    fixKeyName(name) {
      let newName = name;

      function valueIsARange(val) {
        return !(val.startsWith("max") || val.startsWith("min"));
      }

      if (valueIsARange(newName)) {
        newName += " (0 - 5) ";
      }
      return newName.replaceAll("_", " ");
    },
    fixValue(val, name) {
      if (name.includes("height")) {
        return val + " inches";
      }
      if (name.includes("weight")) {
        return val + " pounds";
      }
      if (name.includes("life")) {
        return val + " years";
      }
      return val;
    },
  },
  mounted() {
    this.fetchBreedDetails();
  },
  created() {
    document.title = `${this.breed} - ${this.pet} | Pet breeds`;
  },
};
</script>

<style scoped>
.container-breed {
  display: flex;
}

.flex-2 {
  width: 28rem;
  height: 15rem;
  padding-left: 4rem;
  position: relative;
}

.flex-2::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -4rem;
  right: -4rem;
  height: 14rem;
  width: 14rem;
  background: url("../assets/hexagon.svg") no-repeat center;
  background-size: 12rem;
  transform: rotate(10deg);
  z-index: -1;
}

.flex-2 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.2rem;
}

.flex-1 {
  flex: 1;
}

.item {
  display: flex;
  background: var(--cor-4);
  border-radius: 0.2rem;
  padding: 1rem;
  box-shadow: 0px 0px 50px rgba(203, 215, 189, 0.2);
}
ul {
  margin-top: 3rem;
}
.item + .item {
  margin-top: 1rem;
}

.item p {
  text-transform: capitalize;
  font-weight: 800;
  margin-right: 1rem;
}
.item span {
  color: var(--cor-3);
}
</style>
