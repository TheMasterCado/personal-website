<template>
  <div class="section section-title">
    <div class="title">
      <h2>hi, I'm</h2>
      <h1 class="name">
        <span>T</span>
        <span>h</span>
        <span>e</span>
        <span>M</span>
        <span>a</span>
        <span>s</span>
        <span>t</span>
        <span>e</span>
        <span>r</span>
        <span>C</span>
        <span>a</span>
        <span>d</span>
        <span>o</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTitleSection",
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
  cursor: default;
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

.name span {
  transition: all ease-in-out 1s;
  &:hover {
    transition: all ease-in-out 0.2s;
    margin: 0 0.1em;
  }
}
</style>
