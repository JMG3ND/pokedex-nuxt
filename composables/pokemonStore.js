import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemons", () => {
  //Obtenemos todas las url de los pokemones existentes
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302";
  const dataBasePokemons = ref([]);
  (async () => {
    const data = await $fetch(url);
    dataBasePokemons.value = data.results;
  })();

  const index = ref(40);
  const finder = ref("");
  const listUrl = computed(() => {
    if (finder.value === "") {
      return dataBasePokemons.value?.slice(0, index.value);
    } else {
      return dataBasePokemons.value.filter((v) =>
        v.name.includes(finder.value.toLowerCase())
      );
    }
  });

  return { dataBasePokemons, listUrl, index, finder };
});
