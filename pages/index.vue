<template>
    <div class="screen">
        <div class="screen__top-navegation-container">
            <NavegationTopNavegationBar />
        </div>
        <div class="screen__menu-container">
            <main ref="mainContainer" class="main">
                <div class="main__container">
                    <ContenidoCard v-for="url in listUrlPokemons" :url="url" />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { getListPokemons } from '@/composables/pokemonData';

// Lista de las url de los pokemones para hacer peticiones en la card
const listUrlPokemons = ref();
(async () => listUrlPokemons.value = await getListPokemons())();

const nextPokemons = async () => {
    const newList = await getListPokemons();
    listUrlPokemons.value.push(...newList);
}

const mainContainer = ref();
onMounted(() => {
    // Evento de scroll para la página completa
    mainContainer.value.addEventListener("scroll", function () {
        if (mainContainer.value.scrollHeight - mainContainer.value.scrollTop === mainContainer.value.clientHeight) {
            nextPokemons();
        }
    });
})
</script>

<style lang="scss">
.screen {
    height: 100vh;
    max-height: 100vh;
    overflow-y: hidden;
    display: grid;
    grid-template-rows: 1fr 12fr;

    &__menu-container {
        overflow-y: hidden;
        width: 100%;
        padding: 0 20px;
    }
}

.main {
    background: linear-gradient(to right, #d4d3dd, #efefbb);
    border: rgba(0, 0, 0, 0.5) solid 4px;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    max-height: 95%;
    border-radius: 30px;
    box-shadow: inset 3px 2px 55px -21px rgba(0, 0, 0, 1);

    &__container {
        max-height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        padding: 0.5rem;
        gap: 0.5rem;
    }
}
</style>