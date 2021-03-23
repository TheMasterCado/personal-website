<template>
  <div class="section section-title">
    <div class="title">
      <h2>hi, I'm</h2>
      <h1>The<wbr />Master<wbr />Cado</h1>
    </div>
    <HomeNext nextClass="section-projects"></HomeNext>
  </div>
</template>

<script>
import HomeNext from "@/components/HomeNext";

export default {
  name: "HomeTitleSection",
  components: {
    HomeNext,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-title {
  background: linear-gradient($background-light, $background-dark);
}
h1,
h2 {
  font-family: Raleway, Arial;
  color: $foreground-light;
  text-align: left;
  cursor: default;
  transition: all $default_animation_curve 1s;
  &:hover {
    transform: scale(1.1);
  }
}
h1 {
  font-size: 90px;
  margin-top: 0;
  font-weight: normal;
}
h2 {
  font-size: 22px;
  margin: 0;
  font-weight: bolder;
  text-align: left;
}
</style>
