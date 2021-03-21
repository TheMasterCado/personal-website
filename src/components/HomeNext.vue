<template>
  <div class="next" @click="scrollTo(nextClass)">
    <i data-feather="chevron-down"></i>
  </div>
</template>

<script>
import feather from "feather-icons";
import { scrollTo } from "@/helpers/helpers";

export default {
  name: "HomeNext",
  props: ["nextClass"],
  mounted() {
    feather.replace();
  },
  methods: {
    scrollTo: scrollTo,
  },
};
</script>

<style scoped lang="scss">
.next {
  position: absolute;
  bottom: 30px;
  margin: 0 auto;
  color: $foreground-dark;
  transition: all $default_animation_curve 1s;
  opacity: 0.2;
  svg {
    height: 35px;
    width: 35px;
  }
  &:hover {
    transform: scale(1.2);
    opacity: 0.6;
  }
}
</style>
