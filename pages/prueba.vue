<template>
  <div ref="mainContainer">
    <ContenidoCardContainer>
      <ContenidoCard
        v-for="pokemon in data.results"
        :key="pokemon.name"
        :url="pokemon.url"
      />
    </ContenidoCardContainer>
  </div>
</template>

<script setup>
const limit = ref(40);
const url = computed(
  () => `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit.value}`
);
const { data } = await useFetch(url, { cache: "default" });

const mainContainer = ref();
onMounted(() => {
  // Evento de scroll para hacer peticiones para mostrar más pokmones
  mainContainer.value.addEventListener("scroll", function () {
    const difheignt = Math.floor(
      mainContainer.value.scrollHeight - mainContainer.value.scrollTop
    );
    if (difheignt <= mainContainer.value.clientHeight) {
      limit.value += 40;
    }
  });
});
</script>

<style></style>
