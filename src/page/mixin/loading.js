
export default {
  beforeMount () {
    const images = this.$options.loadableImages;
    if (images && !this.$store.state.loading.initAppLoadIsComplete) {
      this.$store.dispatch("loading/preload", images);
    }
  },
  mounted () {
    this.$store.commit("loading/stopCounting");
  },
  computed: {
    isLoaded () {
      return this.$store.getters["loading/isLoaded"];
    }
  },
  watch: {
    isLoaded (v) {
      if (v === true) {
        if (!this.$store.state.loading.setInitAppLoadComplete) {
          this.$store.commit("loading/setInitAppLoadComplete");
        }
      }
    }
  },
  beforeDestroy (){
    //this.$store.commit("loading/resetCurrentPageState");
  }
};
