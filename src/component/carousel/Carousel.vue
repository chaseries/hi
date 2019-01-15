<template>
  <div class="carousel__cont">
    <transition-group
      name="carousel-loading-trans"
      tag="div"
      :class="transClass">
      <div
        v-for="i in items"
        :key="i"
        :class="getCarouselItemClassName(i)">
        Hello, I am carousel item {{ i }}.
      </div>
    </transition-group>
    <button @click="cycleBackwards">shuffle</button>
    <button @click="cycleForwards">shuffle</button>
  </div>
</template>

<script>

const cycleBackwardsHelp = arr => {
  return [arr[arr.length-1]].concat(arr.slice(0, arr.length-1));
};

const cycleForwardsHelp = arr => {
  return arr.slice(1, arr.length).concat(arr[0]);
};

export default {
  name: "",
  data () {
    return {
      items: [1,2,3,4,5]
    };
  },
  methods: {
    getCarouselItemClassName(i) {
      return `carousel__item carousel__item--${i}`;
    },
    cycleBackwards () {
      this.items = cycleBackwardsHelp(this.items);
    },
    cycleForwards () {
      this.items = cycleForwardsHelp(this.items);
    }
  },
  computed: {
    shouldDisplay () {
      return this.$store.state.loading.initAppLoadIsComplete;
    },
    transClass () {
      return {
        "carousel": true,
        "carousel--anim-forwards": false,
        "carousel--anim-backwards": false
      };
    }
  }
};
</script>

<style lang="sass">

.carousel
  display: flex
  flex-wrap: nowrap
  justify-content: space-between
  background: red

.carousel__item
  text-align: center
  border: 1px solid lime

.carousel-loading-trans-move.carousel__item--1
  opacity: 0

.carousel-loading-trans-move
  transition: transform 10s
    
</style>
