<template>
  <div>
    <div class="card-container">
      <slot />
    </div>
  </div>
</template>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2%;
  gap:5px;
}
</style>
