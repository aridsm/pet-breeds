<template>
  <div>
    <div class="loading"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  border: 3px solid var(--cor-3);
  border-top-color: transparent;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  animation: rotate 2s forwards infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
