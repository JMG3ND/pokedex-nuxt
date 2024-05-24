<template>
  <div v-if="pokemon.name" class="card" :class="`card--${pokemon.type}`">
    <figure class="card__figure">
      <div class="card__image-container">
        <VisualLoadingSpinner class="card__spinner" v-if="loading" />
        <NuxtImg
          v-if="pokemon.type"
          title="background"
          class="card__image-background"
          :src="`/pokemon-types/${pokemon.type}.png`"
        />
        <NuxtImg
          :style="`display: ${loading ? 'none' : 'block'}`"
          :title="pokemon.name"
          class="card__image"
          :src="pokemon.sprite"
          @load="() => (loading = false)"
        />
      </div>
      <figcaption class="card__description">
        <span class="card__number">#{{ pokemon.number }}</span>
        <span class="card__name">{{ pokemon.name }}</span>
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
const prop = defineProps(["url"]);
const loading = ref(true);

// Hacemos una petición a la api con la url del pokemon
const { name: pokename, id, types, sprites } = await $fetch(prop.url);

const pokemon = {
  name: (pokename.charAt(0).toUpperCase() + pokename.slice(1)).split("-")[0],
  number: id,
  type: types[0].type.name,
  sprite: sprites.other["official-artwork"].front_default,
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto+Slab&display=swap");

.card {
  width: 100%;
  border-radius: 1rem;
  cursor: pointer;
  border: rgba(0, 0, 0, 0.3) solid 2px;
  box-shadow: 3px 2px 55px -21px rgba(0, 0, 0, 0.76);
  transition: transform 100ms ease-in-out;
  padding: 0.5rem 0.5rem 0 0.5rem;

  @media screen and (max-width: 750px) {
    padding: 0.1rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  &__image-container {
    aspect-ratio: 1 / 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &__image-background {
    z-index: 0;
    box-shadow: 3px 2px 55px -21px rgba(0, 0, 0, 0.5);
    position: absolute;
    max-height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.3;
  }

  &__image {
    z-index: 1;
    width: 100%;
  }

  &__figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__description {
    font-family: "Roboto Mono", monospace;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 1rem 0;

    @media screen and (max-width: 750px) {
      margin: 0.2rem;
    }
  }

  &__number {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0 10px;
    border-radius: 10px;
  }

  // tamaño de fuente para el número y nombre del pokemón
  &__name,
  &__number {
    @media screen and (max-width: 650px) {
      font-size: small;
    }
    @media screen and (max-width: 400px) {
      font-size: x-small;
    }
    @media screen and (max-width: 350px) {
      font-size: xx-small;
    }
  }

  &__spinner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  @for $i from 1 through 18 {
    $type: nth(
      (
        "water",
        "fire",
        "grass",
        "electric",
        "ice",
        "ground",
        "rock",
        "fighting",
        "poison",
        "flying",
        "psychic",
        "bug",
        "ghost",
        "steel",
        "dragon",
        "dark",
        "fairy",
        "normal"
      ),
      $i
    );

    &--#{$type} {
      background-color: map-get(
        (
          "water": $water,
          "fire": $fire,
          "grass": $grass,
          "electric": $electric,
          "ice": $ice,
          "ground": $ground,
          "rock": $rock,
          "fighting": $fighting,
          "poison": $poison,
          "flying": $flying,
          "psychic": $psychic,
          "bug": $bug,
          "ghost": $ghost,
          "steel": $steel,
          "dragon": $dragon,
          "dark": $dark,
          "fairy": $fairy,
          "normal": $normal,
        ),
        #{$type}
      );
    }
  }
}
</style>
