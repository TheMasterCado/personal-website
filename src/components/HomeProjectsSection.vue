<template>
  <div class="section section-projects">
    <h3>check out my stuff</h3>
    <div class="projects">
      <a
        href="https://marketplace.visualstudio.com/items?itemName=TheMasterCado.vscode-tunes&ssr=false#overview"
      >
        <p>VSCode tunes</p>
        <p class="small">VSCode extension</p>
      </a>
      <a
        href="https://steamcommunity.com/sharedfiles/filedetails/?id=1666197015"
      >
        <p>PeepCam</p>
        <p class="small">Parkitect mod</p>
      </a>
      <a
        href="https://steamcommunity.com/sharedfiles/filedetails/?id=1638239864"
      >
        <p>More Realism</p>
        <p class="small">Parkitect mod</p>
      </a>
      <a href="https://github.com/TheMasterCado/easy-cli">
        <p>easy-cli</p>
        <p class="small">Crystal shard</p>
      </a>
    </div>
    <HomeNext nextClass="section-socials"></HomeNext>
  </div>
</template>

<script>
import HomeNext from "@/components/HomeNext";
import feather from "feather-icons";

export default {
  name: "HomeProjectsSection",
  components: {
    HomeNext,
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style scoped lang="scss">
.section-projects {
  background: $background-dark;
}
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 732px;
  a {
    color: $foreground-dark;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid $foreground-dark;
    border-radius: 5px;
    width: 200px;
    height: 100px;
    margin: 30px 20px;
    font-family: "Roboto Condensed", Arial;
    transition: all $default_animation_curve 0.2s;
    p {
      margin: 0 0 5px 0;
      font-size: 22px;
      transition: all $default_animation_curve 0.2s;
      &.small {
        font-size: 12px;
      }
    }
    // svg {
    //   width: 50px;
    //   height: 50px;
    // }
    // p {
    //   opacity: 0;
    //   margin: 5px 0 0 0;
    //   font-size: 12px;
    //   transform: translateY(-10px);
    //   transition: all $default_animation_curve 0.2s;
    // }
    &:hover {
      background: $background-light-trans;
      p {
        font-size: 24px;
        &.small {
          font-size: 13px;
        }
      }
    }
  }
}
h3 {
  font-family: "Roboto Condensed", Arial;
  color: $foreground-dark;
  font-weight: normal;
  font-size: 22px;
  margin-bottom: 40px;
}
</style>
