<template>
  <ContenidoMainContainer>
    <ContenidoCard v-for="url in listUrlPokemons" :url="url" />
  </ContenidoMainContainer>
</template>

<script setup>
import { getListPokemons } from './composables/pokemonData';

const listUrlPokemons = ref();
(async () => listUrlPokemons.value = await getListPokemons())();
</script>

<style lang="scss">
@use "@/assets/default-style.scss";
@use "@/assets/scrollbar-style.scss";
</style>