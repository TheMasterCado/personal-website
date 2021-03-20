<template>
  <div class="section section-projects">
    <h3>check out my stuff</h3>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "HomeProjectsSection",
  mounted() {
    feather.replace();
  },
};
</script>

<style scoped lang="scss">
.section-projects {
  background: $background-dark;
}
h3 {
  font-family: "Roboto Condensed", Arial;
  color: $foreground-dark;
  font-weight: normal;
  font-size: 22px;
  margin-bottom: 40px;
}
</style>
