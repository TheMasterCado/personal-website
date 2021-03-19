<template>
  <div id="app">
    <!-- <Menu></Menu> -->
    <router-view />
  </div>
</template>

<script>
// import Menu from "@/components/Menu";
// import Background from "@/components/Background";

export default {
  name: "App",
  components: {
    // Menu,
    // Background,
  },
};
</script>

<style lang="scss">
@import "@/scss/global.scss";
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
