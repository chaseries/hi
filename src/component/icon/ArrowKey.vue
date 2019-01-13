<template>
  <div class="arrow-key__wrap">
    <div
      :class="['arrow-key', shouldLightUp ? 'arrow-key--lit' : '']"
      :style="'width:' + width + '; height: ' + width">
      <div v-if="direction === 'left'" class="arrow-key__arrow arrow-key__arrow--left"></div>
      <div v-if="direction === 'right'" class="arrow-key__arrow arrow-key__arrow--right"></div>
    </div>
    <div class="arrow-key__text">Use key</div>
  </div>
</template>

<script>

const keycodeDirectionMap = {
  "left": 37,
  "right": 39
};

export default {
  name: "icon-arrow-key",
  data () {
    return {
      shouldLightUp: false
    };
  },
  props: {
    width: {
      required: true,
      type: String
    },
    direction: {
      required: true,
      type: String
    }
  },
  methods: {
    lightUp () {
      this.shouldLightUp = true;
      window.setTimeout(() => {
        this.shouldLightUp = false;
      }, 300);
    }
  },
  mounted () {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === keycodeDirectionMap[this.direction]) {
        this.lightUp();
      }
    });
  }
};
</script>

<style lang="sass">

.arrow-key
  position: relative
  opacity: 0.40
  border: 2px solid white
  width: 100px
  transition: opacity 0.15s linear
  border-radius: 10%
  margin-bottom: 0.4em
  &__wrap
    text-align: center
  &__text
    font-size: 0.55em
    font-weight: 600
    opacity: 0.4
  &__arrow
    position: absolute
    top: 50%
    left: 50%
    &--left
      border-top: 5px solid transparent
      border-left: 0 solid transparent
      border-right: 6px solid white
      border-bottom: 5px solid transparent
      transform: translate(-55%, -50%)
    &--right
      border-top: 5px solid transparent
      border-left: 6px solid white
      border-right: 0 solid transparent
      border-bottom: 5px solid transparent
      transform: translate(-45%, -50%)
    &--right
  &--lit
    opacity: 1
  &:hover
    opacity: 1
</style>
