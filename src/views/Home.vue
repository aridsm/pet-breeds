<template>
  <main class="container main">
    <div class="flex-1">
      <h1>
        Search for a cat <br />
        or a dog <span>breed</span>
      </h1>
      <p class="description">
        Data for more than 400 cat and <br />
        dog breeds
      </p>

      <form class="form">
        <input type="text" placeholder="Golden Retriever" />
        <button class="btn">Search</button>
      </form>
    </div>
    <div class="flex-2 img">
      <img src="../assets/dog.svg" />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 7rem);
}

.flex-2 img {
  width: 14rem;
}

.img,
h1 {
  margin-top: -6rem;
}

h1 {
  font-size: 3.6rem;
  font-weight: 800;
}

h1 span {
  color: var(--cor-1);
}

.form {
  margin-top: 2rem;
}

.form input {
  margin-right: 0.5rem;
}

.description {
  color: var(--cor-3);
  margin-top: 1rem;
}
</style>
