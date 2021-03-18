<template>
  <div>
    <div class="first-layer">
      <div
        class="line"
        v-for="(line, index) in layer1"
        v-bind:key="index"
        v-bind:style="styleFor(index)"
      >
        {{ line }}
      </div>
    </div>
  </div>
</template>

<script>
const randomLine = () => {
  return new Array(500)
    .fill(0)
    .map(() => Math.round(Math.random()))
    .join("");
};

// const styleFor = (index) => {};

export default {
  name: "Background",
  data() {
    return {
      layer1: new Array(5).fill(0).map(() => randomLine()),
      layer2: new Array(5).fill(0).map(() => randomLine()),
      layer3: new Array(20).fill(0).map(() => randomLine()),

      styleFor: (index) => {
        const margin = `margin-left: ${(index * (index - 1) + index) * 35}px`;
        const top = `top: -${(index + 1) * 30}px`;
        const transform = `transform: translateY(${
          10 + (index % 4) * 40 * (index % 2 === 0 ? -1 : 1)
        }px)`;
        return `${margin};${top};${transform}`;
      },
    };
  },
};
</script>

<style scoped lang="scss">
.line {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  word-break: break-all;
  line-height: 1em;
  width: 1em;
  font-size: 40px;
  font-family: "Roboto Mono", monospace;
  animation-name: mover;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

.first-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .line {
    opacity: 0.4;
    animation-duration: 1.8s;
  }
}

@keyframes mover {
  100% {
    transform: translateY(0);
    filter: opacity(2);
  }
}
</style>
