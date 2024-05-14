<template>
  <div>
    <div class="justify-spinner">
      <div class="lds-spinner">
        <div v-for=" in 12"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.justify-spinner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lds-spinner {
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}

.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: #646464;
}

@for $i from 1 to 13 {
  .lds-spinner div:nth-child(#{$i}) {
    transform: rotate(30deg * ($i - 1));
    animation-delay: -1.1s + (0.1 * ($i - 1));
  }
}

@keyframes lds-spinner {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
