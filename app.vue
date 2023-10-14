<template>
  <div class="screen">
    <div class="screen__top-navegation-container">
      <NavegationTopNavegationBar />
    </div>
    <div class="screen__menu-container">
      <ContenidoMainContainer>
        <ContenidoCard v-for="pokemon, index in dataPokemons" :npokemon="index + 1">
          <img :src="image(index)" />
        </ContenidoCard>
      </ContenidoMainContainer>
    </div>
  </div>
</template>

<script setup>
const dataPokemons = ref({});
const image = index => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/?offset=60&limit=60")
    .then(response => response.json())
    .then(data => dataPokemons.value = data.results)
})
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
</style>