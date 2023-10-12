<template>
  <div class="screen">
    <NavegationTopNavegationBar/>
    <MainContainer/>
  </div>
</template>

<style lang="scss">
*,*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.screen{
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 12fr;
}
</style>