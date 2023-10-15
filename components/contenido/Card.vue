<template>
    <div class="card" :class="`card--${pokemon.type}`">
        <figure class="card__figure">
            <div class="card__image-container">
                <img class="card__image" :src="pokemon.sprite" />
            </div>
            <figcaption class="card__description">
                <span class="card__number">#{{ pokemon.id }}</span>
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
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto+Slab&display=swap');

.card {
    background-color: $bug;
    width: fit-content;
    border-radius: 1rem;
    padding: 1rem;
    cursor: pointer;
    transition: scale 100ms ease-in-out;

    &:hover {
        scale: 1.05;
    }

    &__image-container {
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        width: 180px;
        height: 180px;
        text-align: center;
    }

    &__image {
        width: 100%;
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
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        gap: 1rem;

        font-size: x-large;
        font-family: 'Roboto Mono', monospace;
        font-family: 'Roboto Slab', serif;

        color: rgba(0, 0, 0, 0.628);
    }

    &__number {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 5px 10px;
        border-radius: 10px;
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