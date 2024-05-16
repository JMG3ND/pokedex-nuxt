<template>
  <div>
    <div class="card-container">
      <slot />
    </div>
  </div>
</template>

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  padding: 0 1rem;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
