<template>
  <component
    :is="trans.component"
    :duration="trans.duration"
    :suspend="trans.suspend"
    :shouldPlay="shouldPlay">
  </component>
</template>

<script>

export default {
  name: "component-trans-container",
  computed: {
    trans () {
      return this.$store.getters["trans/currentTrans"];
    },
    shouldPlay () {
      return this.$store.getters["trans/shouldPlay"];
    }
  }
};
</script>

<style lang="sass">
</style>
