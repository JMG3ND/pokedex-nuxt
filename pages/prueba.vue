<template>
  <div ref="mainContainer">
    <input @click="click" v-model="input" />
    <ContenidoCardContainer>
      <ContenidoCard
        v-for="pokemon in results"
        :key="pokemon.name"
        :url="pokemon.url"
      />
      <!-- <div v-for="pokemon in results">
        {{ pokemon.name }}
      </div> -->
    </ContenidoCardContainer>
  </div>
</template>

<script setup>
const urlBase = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=";
const limit = ref(40);
const input = ref("");
const url = computed(() => urlBase + limit.value);
const { data, refresh } = await useFetch(url);
const data2 = await $fetch(urlBase + "1302");

const click = () => refresh();

const results = computed(() => {
  if(input.value === "") {
    return data.value.results;
  }
  if(limit.value !== 40) limit.value = 40;
  return data2.results.filter(v => v.name.includes(input.value));
});

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
