<template>
  <div>
    <input class="filter-pokemon" placeholder="pokemon..." type="text" />
  </div>
</template>

<script setup>
import { usePokemonStore } from '@/composables/pokemonStore';
const pokemonData = usePokemonStore();
</script>

<style lang="scss" scoped>
.filter-pokemon {
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 20px;
  color: white;

  @media screen and (max-width: 400px) {
    width: 100px;
  }
}
</style>
