<template>
  <div class="home">
    <HomeAnchors></HomeAnchors>
    <HomeTitleSection></HomeTitleSection>
    <HomeProjectsSection></HomeProjectsSection>
    <HomeSocialsSection></HomeSocialsSection>
  </div>
</template>

<script>
import HomeAnchors from "@/components/HomeAnchors";
import HomeTitleSection from "@/components/HomeTitleSection";
import HomeProjectsSection from "@/components/HomeProjectsSection";
import HomeSocialsSection from "@/components/HomeSocialsSection";
export default {
  name: "Home",
  components: {
    HomeAnchors,
    HomeTitleSection,
    HomeProjectsSection,
    HomeSocialsSection,
  },
};
</script>

<style scoped lang="scss"></style>
