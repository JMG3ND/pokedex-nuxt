<template>
  <div>
    <header class="top-navegation-bar">
      <img
        class="top-navegation-bar__logo"
        title="logo"
        src="/public/pokedex-logo.png"
        alt="Logo"
      />
    </header>
  </div>
</template>

<style scoped lang="scss">
.top-navegation-bar {
  background-color: $background-color;
  height: 100%;
  padding: 0.5rem 1rem;

  &__logo {
    height: 50px;
  }
}
</style>
