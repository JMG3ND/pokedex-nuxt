<template>
  <div ref="mainContainer">
    <ContenidoCardContainer>
      <ContenidoCard v-for="url in listUrlPokemons" :url="url" />
    </ContenidoCardContainer>
  </div>
</template>

<script setup>
import { getListPokemons } from "@/composables/pokemonData";

// Lista de las url de los pokemones para hacer peticiones en la card
const listUrlPokemons = ref();
(async () => (listUrlPokemons.value = await getListPokemons()))();

// Hace la perición para añádir pokemones a la pantalla
const nextPokemons = async () => {
  const newList = await getListPokemons();
  listUrlPokemons.value.push(...newList);
};

const mainContainer = ref();
onMounted(() => {
  // Evento de scroll para hacer peticiones para mostrar más pokmones
  mainContainer.value.addEventListener("scroll", function () {
    const difheignt = Math.floor(
      mainContainer.value.scrollHeight - mainContainer.value.scrollTop
    );
    if (difheignt <= mainContainer.value.clientHeight + 10) {
      nextPokemons();
    }
  });
});
</script>
