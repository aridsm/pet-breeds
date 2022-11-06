<template>
  <main class="container main">
    <div class="flex-1">
      <h1>
        Search for a cat <br />
        or a dog <span>breed</span>
      </h1>
      <p>Data for more than 400 cat and dog breeds</p>

      <form>
        <input type="text" placeholder="Golden Retriever" />
        <button class="btn">Search</button>
      </form>
    </div>
    <div class="flex-2">
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
}

.flex-2 img {
  width: 14rem;
}

h1 {
  font-size: 3.6rem;
  font-weight: 800;
}

h1 span {
  color: var(--cor-1);
}
</style>
