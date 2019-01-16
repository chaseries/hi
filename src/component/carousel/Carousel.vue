<template>
  <div>
    <div id="carousel" :class="['carousel', carouselAnimState]">
      <div
        v-for="(item, k) in rotation"
        :key="k"
        :class="[getItemDefaultClass(k + 1), getItemLoadClass(k + 1)]">
        <template v-if="k === 2">
          <router-link :to="getProjectUrl(item.slug)">
            <h2>{{ item.title }}</h2>
          </router-link>
        </template>
        <template v-else>
            <h2 @click="rotateCarousel(k + 1)">{{ item.title }}</h2>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "",
  data () {
    return {
      direction: null
    };
  },
  methods: {
    getProjectUrl (slug) {
      return `/works/${slug}`;
    },
    rotateCarousel (k) {
      console.log("I'm about to rotate. The value of `k` is", k);
      if (k === 2) { this.prev(); }
      if (k === 4) { this.next(); }
    },
    getItemDefaultClass(i) {
      return `carousel__item carousel__item--${i}`;
    },
    getItemLoadClass(i) {
      const appIsLoaded = this.$store.state.loading.initAppLoadIsComplete;
      return appIsLoaded ? "" : `carousel__item--loading--${i}`;
    },
    prev () {
      if (!this.$store.state.carousel.locked) {
        this.direction = "backwards";
        this.$store.commit("carousel/prev");
        this.$store.commit("carousel/lock");
      }
    },
    next () {
      if (!this.$store.state.carousel.locked) {
        this.direction = "forwards";
        this.$store.commit("carousel/next");
        this.$store.commit("carousel/lock");
      }
    },
    handleKeyCodes (e) {
      if (e.keyCode === 37) { this.prev(); } // left arrow
      if (e.keyCode === 39) { this.next(); } // right arrow
      if (e.keyCode === 32) { this.$store.commit("carousel/pause"); } // space bar
    },
    cleanupTransition (e) {
      const isForwards = e.animationName === "carousel--anim-forwards";
      const isBackwards = e.animationName === "carousel--anim-backwards";
      if (isForwards || isBackwards) {
        this.direction = "";
        this.$store.commit("carousel/unlock");
      }
    }
  },
  computed: {
    rotation () {
      const items = this.$store.state.carousel.items;
      return [
        items[Math.abs((items.length - 2)) % items.length],
        items[Math.abs((items.length - 1)) % items.length],
        items[0],
        items[1 % items.length],
        items[2 % items.length]
      ];
    },
    shouldDisplay () {
      return this.$store.state.loading.initAppLoadIsComplete;
    },
    carouselAnimState () {
      return this.direction ? `carousel--anim-${this.direction}` : "";
    }
  },
  mounted () {
    const carousel = document.getElementById("carousel");
    window.addEventListener("keyup", this.handleKeyCodes);
    carousel.addEventListener("animationend", this.cleanupTransition);
  },
  beforeDestroy () {
    const carousel = document.getElementById("carousel");
    window.removeEventListener("keyup", this.handleKeyCodes);
    carousel.removeEventListener("animationend", this.cleanupTransition);
  }
};
</script>

<style lang="sass">

$offsets: [-100%, -50%, 0, 50%, 100%]
$translate-easing: cubic-bezier(0.71, 0.05, 0.28, 0.95)
$translate-timing: 0.7s
$post-load-easing: cubic-bezier(0, 1.00, 0.0, 1)
$opacity-easing: linear

.carousel
  // Non-functional components
  font-family: GtSectraRegular
  letter-spacing: 0.05em
  color: white
  a
    color: white
  h2
    &:hover
      cursor: pointer
      pointer-events: all
    font-size: 6rem
    display: inline
  // Functional components
  position: relative
  background: rgba(lime, 0.25)
  &--anim-forwards
    animation: carousel--anim-forwards $translate-timing $translate-easing
    .carousel__item--2
      animation: carousel--opacity $translate-timing $opacity-easing reverse
    .carousel__item--3
      animation: carousel--opacity $translate-timing $opacity-easing
  &--anim-backwards
    animation: carousel--anim-backwards $translate-timing $translate-easing
    .carousel__item--3
      animation: carousel--opacity $translate-timing $opacity-easing
    .carousel__item--4
      animation: carousel--opacity $translate-timing $opacity-easing reverse

.carousel__item
  position: absolute
  text-align: center
  width: 100%
  opacity: 0.15
  transition: opacity 0.5s linear 1.5s
  @for $i from 1 through 5
    &--#{$i}
      transform: translate(nth($offsets, $i), -50%)
      @if $i==3
        opacity: 1
        transition: opacity 0.80s linear, transform 1.00s $post-load-easing
        pointer-events: none
        h2
          pointer-events: all
    &--loading--#{$i}
      transform: translate(nth($offsets, $i), 250%)
      opacity: 0

.carousel__item--3
  z-index: 10


@keyframes carousel--anim-forwards
  0%
    transform: translate(50%, -50%)
  100%
    transform: translate(0, -50%)

@keyframes carousel--anim-backwards
  0%
    transform: translate(-50%, -50%)
  100%
    transform: translate(0, -50%)

@keyframes carousel--opacity
  0%
    opacity: 0.15
  100%
    opacity: 1

</style>
