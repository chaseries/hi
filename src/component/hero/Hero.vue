<template>
  <div class="hero">
    <layout-header></layout-header>
    <carousel></carousel>
    <sub-header
      heading="Welcome to Heavy Industries"
      body="Lorsque j'avais six ans j'ai vu, une fois, une magnifique image, dans un livre sur la Forêt Vierge qui s'appelait Histoires Vécues."
      ></sub-header>
  </div>
</template>

<script>
import LayoutHeader from "VUE_COMPONENT/layout/header/LayoutHeader.vue";
import Carousel from "VUE_COMPONENT/carousel/Carousel.vue";
import SubHeader from "VUE_COMPONENT/subheader/SubHeader.vue";


export default {
  name: "component-hero-hero",
  components: {
    LayoutHeader,
    Carousel,
    SubHeader
  },
  computed: {
    shouldDisplay () {
      return this.$store.state.loading.initAppLoadIsComplete;
    }
  }
};
</script>

<style lang="sass">

$timing-transform: 1.1s
$timing-opacity: 0.80s
$delay: 0.35s
$easing: cubic-bezier(0, 1.00, 0.0, 1)

.hero
  display: flex
  flex-direction: column
  justify-content: space-between
  color: white
  background-color: #111
  min-height: 100vh;
  overflow: hidden

.carousel-main
  // DELETE BELOW
  text-align: center
  .subguts
    min-height: 50px
  .carousel-main__superheading
    margin-bottom: 0.75em
  h1
    font-family: GtSectraRegular
    font-size: 4em
    letter-spacing: 0.05em

.carousel-main__superheading-enter-active
  opacity: 1
  transform: translateY(0)
  transition: transform $timing-transform $easing $delay, opacity $timing-opacity linear $delay

.carousel-main__superheading-enter
  opacity: 0
  transform: translateY(200%)

.carousel-main__heading-enter-active
  opacity: 1
  transform: translateY(0)
  transition: transform $timing-transform $easing $delay + 0.05s, opacity $timing-opacity linear $delay + 0.05s

.carousel-main__heading-enter
  opacity: 0
  transform: translateY(150%)

.subguts

</style>
