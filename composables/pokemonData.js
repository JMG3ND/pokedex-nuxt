import getData from "./getData";

// Url que contiene todos los pokemones
let url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40';

// Definimos un array para enlazar los nombres e index de todos los pokemones
export async function getListPokemons() { // Utilizamos un método que se auto invoca cuando para igualar el array
    
    // Hacemos la petición de la url y obtenemos una array de objetos en la propiedad results
    let pokemonsData = await getData(url);

    // Obtenemos el enlace de los siguientes n pokemones
    url = pokemonsData.next;

    // Aplicamos un cambio a los datos que obtenemos para que el array solo contenga la url de los pokemones
    pokemonsData = pokemonsData.results.map(element => element.url)

    // Retornamos las url
    return pokemonsData;
}

export async function getCardDataPokemon(url) {
        // Hacemos una petición a la api con la url del pokemon
        const pokemonData = await getData(url);
        
        // De la respuesta destructuramos los valores de id, types y sprites
        let {name,id: number, types: type, sprites: sprite} = pokemonData;

        // Hacemos que la primera letra del nombre sea mayúscula
        name = name.split('').map((char, index) => index ? char : char.toUpperCase()).join('');
        name = name.split("-")[0];

        // Accedemos al link de la imágen official-artwork
        sprite = sprite.other["official-artwork"].front_default;

        // Accedemos al primer tipo del pokemon para estilizar el color de fondo de la card
        type = type[0].type.name;
        
        // Acemos push a la lista de pokemones con las propiedades que estabamos buscando
        return { number, name, sprite, type };
}