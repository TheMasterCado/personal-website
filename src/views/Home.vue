<template>
  <div class="home">
    <HomeTitleSection></HomeTitleSection>
    <div class="section section-socials">
      <h3>where to find me</h3>
      <div class="socials">
        <a href="https://github.com/TheMasterCado">
          <i data-feather="github"></i>
          <p>GitHub</p>
        </a>
        <a href="https://twitter.com/themastercado">
          <i data-feather="twitter"></i>
          <p>Twitter</p>
        </a>
        <a href="https://www.youtube.com/channel/UCbElT1hoprpNJ4hj61AE4rw">
          <i data-feather="youtube"></i>
          <p>YouTube</p>
        </a>
        <a href="https://www.buymeacoffee.com/themastercado">
          <i data-feather="dollar-sign"></i>
          <p>Donations</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
import HomeTitleSection from "@/components/HomeTitleSection";
export default {
  name: "Home",
  components: {
    HomeTitleSection,
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style scoped lang="scss">
.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: $foreground-dark;
    text-decoration: none;
    margin: 0 3em;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
    svg {
      width: 50px;
      height: 50px;
    }
    p {
      font-family: "Roboto Condensed", Arial;
      opacity: 0;
      margin: 5px 0 0 0;
      font-size: 12px;
      transform: translateY(-10px);
      transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
    }
    &:hover {
      transform: scale(1.3);
      p {
        opacity: 1;
        transform: translateY(0);
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
