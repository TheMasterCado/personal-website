<template>
  <div class="home-anchors">
    <span class="anchor" @click="scrollTo('section-title')">
      <i data-feather="circle"></i>
      <span class="label">Home</span>
    </span>
    <span class="anchor" @click="scrollTo('section-projects')">
      <i data-feather="circle"></i>
      <span class="label">Projects</span>
    </span>
    <span class="anchor" @click="scrollTo('section-socials')">
      <i data-feather="circle"></i>
      <span class="label">Contact</span>
    </span>
  </div>
</template>

<script>
import feather from "feather-icons";
import { scrollTo } from "@/helpers/helpers";

export default {
  name: "HomeAnchors",
  mounted() {
    feather.replace();
  },
  methods: {
    scrollTo: scrollTo,
  },
};
</script>

<style scoped lang="scss">
.home-anchors {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  .anchor {
    margin: 10px 0;
    display: flex;
    align-items: center;
    color: $foreground-dark;
    transition: all $default_animation_curve 0.3s;
    opacity: 0.2;
    svg {
      width: 15px;
      height: 15px;
    }
    .label {
      opacity: 0;
      font-size: 11px;
      font-family: "Roboto Condensed", Arial;
      display: inline-block;
      margin-left: 5px;
      transform: translateX(20px);
      transition: all $default_animation_curve 0.3s;
    }
    &:hover {
      transform: scale(1.2) translateX(5px);
      opacity: 0.6;
      .label {
        opacity: 0.6;
        transform: translateX(0);
      }
    }
  }
}
</style>
