<template>
  <transition name="trans-init" :duration="duration" v-on:afterLeave="afterLeave">
    <div v-if="shouldPlay" class="trans trans__init">
      <div class="trans__guts">
        <span class="trans__init__loading-text">Loading</span>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "component-trans-init",
  props: {
    shouldPlay: {
      required: true,
      type: Boolean
    },
    duration: {
      required: false,
      type: Number,
      default: 0
    }
  },
  methods: {
    afterLeave () {
      this.$store.commit("trans/setTransComplete", true);
    }
  },
  mounted () {
    this.$store.commit("trans/setTransComplete", false);
  }
};
</script>

<style lang="sass">

.trans
  position: fixed
  width: 100%
  height: 100%

.trans__guts
  color: #999
  position: relative
  top: 50%
  transform: translateY(-50%)
  text-align: center

.trans__init
  background-color: white
  &__loading-text
    text-transform: uppercase
    font-size: 0.8em
    letter-spacing: 0.10em
    animation: blur-out 0.80s linear forwards

.trans__init-leave
  opacity: 1

.trans__init-leave-active
  transition: opacity 1.0s
  opacity: 0

@keyframes blur-out
  0%
    filter: blur(.5em)
  30%
    filter: blur(0)
  70%
    opacity: 1
  100%
    opacity: 0
</style>
