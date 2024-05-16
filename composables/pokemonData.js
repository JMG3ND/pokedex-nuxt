import getData from "./getData";

// Url que contiene todos los pokemones
let url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40';

// Definimos un array para enlazar los nombres e index de todos los pokemones
export async function getListPokemons() { // Utilizamos un método que se auto invoca cuando para igualar el array
    
    // Hacemos la petición de la url y obtenemos una array de objetos en la propiedad results
    let pokemonsData = await getData(url);
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
        let {name, id: number, types: type, sprites: sprite} = pokemonData;

        // Hacemos que la primera letra del nombre sea mayúscula
        // Se hace un split "-" ya que existen nombres de pokemones con guiones entonces
        // solo retoramos el prier elemento del array con [0] para eliminar los guiones y los otros nombres
        name = (name.charAt(0).toUpperCase() + name.slice(1)).split("-")[0];

        // Accedemos al link de la imágen official-artwork que es la bonita
        sprite = sprite.other["official-artwork"].front_default;

        // Accedemos al primer tipo del pokemon para estilizar el color de fondo de la card
        // ya que algunos pokemones tienen dos tipos y solo nos interesa uno para estilizar a card
        type = type[0].type.name;
        
        return { number, name, sprite, type };
}