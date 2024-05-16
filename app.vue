<template>
  <div>
    <div class="screen">
      <header class="screen__top-navegation-container">
        <NavegationTopNavegationBar />
      </header>
      <main class="screen__menu-container">
        <div class="screen__main">
          <NuxtPage />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/default-style.scss";
@use "@/assets/scrollbar-style.scss";

$max-widht: 1200px;
.screen {
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  display: grid;
  grid-template-rows: 1fr 12fr;

  &__top-navegation-container > div:first-child {
    max-width: $max-widht;
    margin: 0 auto;
  }

  &__menu-container {
    overflow-y: hidden;
    width: 100%;
  }

  &__main {
    background: linear-gradient(to right, #d4d3dd, #efefbb);
    border: rgba(0, 0, 0, 0.5) solid 4px;
    height: 100%;
    width: 100%;
    max-width: $max-widht;
    max-height: 95%;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: inset 3px 2px 55px -21px rgba(0, 0, 0, 1);
    
    & > div:first-child {
      margin: 0 auto;
      max-height: 100%;
      overflow-y: scroll;
    }
  }
}
</style>