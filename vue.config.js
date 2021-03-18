module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/_fonts.scss";
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
}