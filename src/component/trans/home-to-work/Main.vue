<template>
  <div>
    <!-- This transition intentionally left empty because it's handled in canvas -->
  </div>
</template>

<script>

export default {
  name: "component-trans-default",
  computed: {
    shouldPlay () {
      return this.$store.getters["trans/currentTrans"] === "homeToWork";
    }
  },
  methods: {
    afterEnter () {
      window.setTimeout(() => {
        this.$store.commit("trans/leave");
      }, 200);
    }
  }
};
</script>

<style lang="sass">



</style>
