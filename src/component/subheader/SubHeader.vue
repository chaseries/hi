<template>
  <div class="subheader">
    <transition
      name="subheader__blurb">
      <div v-if="shouldDisplay">
        <h1 class="subheader__heading">{{ heading }}</h1>
        <p class="subheader__body">{{ body }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "component-subheader-subheader",
  props: {
    heading: {
      required: true,
      type: String
    },
    body: {
      required: true,
      type: String
    }
  },
  computed: {
    shouldDisplay () {
      return this.$store.state.loading.initAppLoadIsComplete;
    }
  }
};
</script>

<style lang="sass">

.subheader
  position: relative
  width: 100%
  max-width: 400px 
  left: 50%
  transform: translateX(-50%)
  &__heading
    font-size: 1rem
    font-weight: medium
  &__body
    font-size: 1rem

.subheader__blurb-enter-active
  transform: translateY(0)
  opacity: 1
  transition: transform 0.7s cubic-bezier(0, 0.70, 0.10, 1) 0.8s, opacity 0.7s linear 0.8s

.subheader__blurb-enter
  opacity: 0
  transform: translateY(100%)

</style>
