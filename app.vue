<template>
  <div class="screen">
    <div class="screen__top-navegation-container">
      <NavegationTopNavegationBar />
    </div>
    <div class="screen__menu-container">
      <ContenidoMainContainer>
        <ContenidoCard v-for="url in listUrlPokemons" :url="url" />
      </ContenidoMainContainer>
    </div>
  </div>
</template>

<script setup>
import { getListPokemons } from './composables/pokemonData';

const listUrlPokemons = ref();
(async () => listUrlPokemons.value = await getListPokemons())();
</script>

<style lang="scss">
@use "@/assets/default-style.scss";
@use "@/assets/scrollbar-style.scss";

.screen {
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  display: grid;
  grid-template-rows: 1fr 12fr;

  &__menu-container {
    overflow-y: hidden;
    width: 100%;
  }
}
</style>./composables/pokemonData