<template>
  <div>
    <div class="top-navegation-bar">
      <img
        class="top-navegation-bar__logo"
        title="logo"
        src="pokedex-logo.png"
        alt="Logo"
      />
      <NavegationFilterPokemon />
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-navegation-bar {
  background-color: $background-color;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  padding: 0.5rem;

  &__logo {
    height: 50px;
  }
}
</style>
