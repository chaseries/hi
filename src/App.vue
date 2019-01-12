<template>
  <div id="app">
    <div>
      <div>
        <ul>
          <li>Total assets: {{ totalAssets }}</li>
          <li>Total loaded: {{ totalLoaded }}</li>
          <li>Finished loading? {{ isLoaded }}</li>
          <li>Init app load is complete? {{ initAppLoadIsComplete }}</li>
        </ul>
      </div>
      <div v-if="hasTrans">
        The trans type is {{ transType }}.
        <br>
        Should it be playing? {{ isPlaying }}
      </div>
      <div v-else>
        There is no transition set.
      </div>
    </div>

    <transition :duration="500" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import LayoutHeader from "VUE_COMPONENT/layout/header/LayoutHeader.vue";
import LayoutFooter from "VUE_COMPONENT/layout/footer/LayoutFooter.vue";
import TransDefault from "VUE_COMPONENT/trans/default/Main.vue";

export default {
  name: "app",
  components: {
    LayoutHeader,
    LayoutFooter,
    TransDefault
  },
  computed: {
    transType () {
      return this.$store.getters["trans/currentTrans"] || "null";
    },
    hasTrans () {
      return this.$store.getters["trans/hasTrans"];
    },
    isPlaying () {
      return this.$store.state.trans.play;
    },
    totalAssets () {
      return this.$store.state.loading.currentPage.totalAssets;
    },
    totalLoaded () {
      return this.$store.state.loading.currentPage.totalLoaded;
    },
    isLoaded () {
      return this.$store.getters["loading/isLoaded"];
    },
    initAppLoadIsComplete () {
      return this.$store.state.loading.initAppLoadIsComplete;
    }
  }
};
</script>

<style lang="sass">
@import "~SASS/main";
</style>
