// Hacemos la función asincrona para esperar a que se obtengan los datos
export default async function getData(url){
    return new Promise(async resolve => {// Esperamos a que se resuelva la promesa

        // Hacemos una petición a la pokeapi para obtener la data de los pokemones
        const response = await fetch(url);

        // convertimos la respuesta a formato json
        const data = await response.json();

        // Finalmente resolvemos la promesa y enviamos el resultado
        resolve(data);
    })
}