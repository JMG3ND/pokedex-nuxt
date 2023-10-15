import getData from "./getData";
// Definimos un array para enlazar los nombres e index de todos los pokemones
export async function getListPokemons() { // Utilizamos un método que se auto invoca cuando para igualar el array
    // Url que contiene todos los pokemones
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
    
    // Hacemos la petición de la url y obtenemos una array de objetos en la propiedad results
    let pokemonsData = await getData(url);

    // Aplicamos un cambio a los datos que obtenemos para que el array solo contenga la url de los pokemones
    pokemonsData = pokemonsData.results.map(element => element.url)
    
    // Retornamos las url
    return pokemonsData;
}

export async function getCardDataPokemon(url) {
        // Hacemos una petición a la api con la url del pokemon
        const pokemonData = await getData(url);
        
        // De la respuesta destructuramos los valores de id, types y sprites
        const {name, id, types, sprites} = pokemonData;

        // Acemos push a la lista de pokemones con las propiedades que estabamos buscando
        return {
            id,
            name,
            "sprite":sprites.other["official-artwork"].front_default,
            "type":types[0].type.name
        };
}