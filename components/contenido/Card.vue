<template>
    <div class="card" :class="`card--${pokemon.type}`">
        <figure class="card__figure">
            <div class="card__image-container">
                <VisualLoadingSpinner class="card__spinner" v-if="loading" />
                <img class="card__image" :src="pokemon.sprite" @load="finishLoading()" />
            </div>
            <figcaption class="card__description">
                <span class="card__number">#{{ pokemon.number }}</span>
                <span class="card__name">{{ pokemon.name }}</span>
            </figcaption>
        </figure>
    </div>
</template>

<script setup>
import { getCardDataPokemon } from '~/composables/pokemonData';

const prop = defineProps(["url"]);
const pokemon = ref({});
(async () => pokemon.value = await getCardDataPokemon(prop.url))();

const loading = ref(true);
const finishLoading = () => loading.value = false;
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto+Slab&display=swap');

.card {
    width: fit-content;
    border-radius: 1rem;
    padding: 1rem;
    cursor: pointer;
    border: rgba(0, 0, 0, 0.3) solid 2px;
    box-shadow: 3px 2px 55px -21px rgba(0, 0, 0, 0.76);
    transition: scale 100ms ease-in-out;

    &:hover {
        scale: 1.05;
    }

    &__image-container {
        box-shadow: 3px 2px 55px -21px rgba(0, 0, 0, 0.5);
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        width: 180px;
        height: 180px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__spinner {
        position: absolute;
    }

    &__image {
        width: 90%;
    }

    &__figure {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: fit-content;
        height: 100%;
        margin: 0 auto;
        padding-bottom: 1rem;
        gap: 1rem;
    }

    &__description {
        font-family: 'Roboto Mono', monospace;
        color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

    &__number {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 0 10px;
        border-radius: 10px;
    }

    &__name {
        font-size: large;
    }

    @for $i from 1 through 18 {
        $type: nth(('water', 'fire', 'grass', 'electric', 'ice', 'ground', 'rock', 'fighting', 'poison', 'flying', 'psychic', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy', 'normal'), $i);

        &--#{$type} {
            background-color: map-get(('water': $water,
                    'fire': $fire,
                    'grass': $grass,
                    'electric': $electric,
                    'ice': $ice,
                    'ground': $ground,
                    'rock': $rock,
                    'fighting': $fighting,
                    'poison': $poison,
                    'flying': $flying,
                    'psychic': $psychic,
                    'bug': $bug,
                    'ghost': $ghost,
                    'steel': $steel,
                    'dragon': $dragon,
                    'dark': $dark,
                    'fairy': $fairy,
                    'normal':$normal),
                #{$type});
        }
    }
}
</style>