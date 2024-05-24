<template>
  <div>
    <input
      @change="index = 40"
      v-model="finder"
      class="filter-pokemon"
      placeholder="pokemon..."
      type="text"
    />
  </div>
</template>

<script lang="ts" setup>
import { usePokemonStore } from "@/composables/pokemonStore";
const { finder, index } = storeToRefs(usePokemonStore());
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
