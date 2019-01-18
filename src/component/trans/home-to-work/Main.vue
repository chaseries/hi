<template>
  <div v-if="shouldPlay">
  </div>
</template>

<script>

export default {
  name: "component-trans-default",
  props: {
    shouldPlay: {
      required: true,
      type: Boolean
    },
    duration: {
      required: true,
      type: Number
    }
  },
  mounted () {
    window.setTimeout(() => {
      this.$store.commit("trans/leave");
    }, this.duration);
  }
};
</script>

<style lang="sass">



</style>
