import { defineStore } from "pinia";
import getData from "./getData";

export const usePokemonStore = defineStore("pokemons", () => {
  //Obtenemos todas las url de los pokemones existentes
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302";
  const listPokemons = [0];

  return { listPokemons };
});
