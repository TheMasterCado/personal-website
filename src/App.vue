<template>
  <div id="app" v-bar>
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
  color: #2c3e50;
}
</style>
