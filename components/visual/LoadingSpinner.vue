<template>
  <div>
    <div class="pokeball">
      <div class="pokeball__button"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pokeball {
  position: relative;
  width: 80%;
  aspect-ratio: 1 / 1;
  background: #fff;
  border: 4px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  animation: shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  animation-play-state: running;
}

@keyframes shake {
  0% {
    transform: translate(0, 0) rotate(0);
  }
  20% {
    transform: translate(-10px, 0) rotate(-20deg);
  }
  30% {
    transform: translate(10px, 0) rotate(20deg);
  }
  50% {
    transform: translate(-10px, 0) rotate(-10deg);
  }
  60% {
    transform: translate(10px, 0) rotate(10deg);
  }
  100% {
    transform: translate(0, 0) rotate(0);
  }
}

.pokeball::before,
.pokeball::after {
  content: "";
  position: absolute;
}

.pokeball::before {
  background: red;
  width: 100%;
  height: 50%;
}

.pokeball::after {
  top: 46.66%;
  width: 100%;
  height: 6.67%;
  background: #000;
}

.pokeball__button {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 20%;
  height: 20%;
  background: #fff;
  border: 3% solid #7f8c8d;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 4px black;
  animation: blink 0.5s alternate infinite;
  animation-play-state: paused;
}

@keyframes blink {
  from {
    background: #eee;
  }
  to {
    background: #e74c3c;
  }
}
</style>
