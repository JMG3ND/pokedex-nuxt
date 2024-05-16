<template>
  <div ref="mainContainer">
    <ContenidoCardContainer>
      <ContenidoCard
        v-for="pokemon in listUrl"
        :key="pokemon.name"
        :url="pokemon.url"
      />
    </ContenidoCardContainer>
  </div>
</template>

<script setup>
import { usePokemonStore } from "@/composables/pokemonStore";
const pokemonData = usePokemonStore();
const { dataBasePokemons, listUrl, index } = storeToRefs(pokemonData);

const mainContainer = ref();
onMounted(() => {
  // Evento de scroll para hacer peticiones para mostrar más pokmones
  mainContainer.value.addEventListener("scroll", function () {
    const difheignt = Math.floor(
      mainContainer.value.scrollHeight - mainContainer.value.scrollTop
    );
    if (difheignt <= mainContainer.value.clientHeight) {
      if (index.value + 40 < dataBasePokemons.value.length) {
        index.value += 40;
      } else {
        index.value += dataBasePokemons.value.length - index.value;
      }
    }
  });
});
</script>
