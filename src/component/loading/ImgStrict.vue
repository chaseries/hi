<template>
  <img
    @load="setIsLoaded"
    @error="handleError"
    src="src"
    width="width"
    height="height"
    alt="alt">
</template>

<script>

export default {
  name: "component-loading-img-strict",
  mixins: {},
  methods: {
    incrementTotalLoaded () {
      this.$store.commit("loading/incrementTotalLoaded");
    },
    setIsLoaded () {
      this.incrementTotalLoaded();
    },
    handleError () {
      // If it can't load, it shouldn't hold anything else up
      this.incrementTotalLoaded();
    }
  },
  beforeMount () {
    this.$store.commit("loading/incrementTotalAssets");
  },
  mounted () {
    this.$store.commit("loading/setFinishedCountingTrue");
  }
};
</script>
