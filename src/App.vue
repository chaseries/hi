<template>
  <div id="app">
    <modal></modal>
    <trans-default></trans-default>
    <trans-init></trans-init>
    <transition :duration="250" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import LayoutHeader from "VUE_COMPONENT/layout/header/LayoutHeader.vue";
import LayoutFooter from "VUE_COMPONENT/layout/footer/LayoutFooter.vue";
import TransDefault from "VUE_COMPONENT/trans/default/Main.vue";
import TransInit from "VUE_COMPONENT/trans/init/Main.vue";
import Modal from "VUE_COMPONENT/modal/Modal.vue";

export default {
  name: "app",
  components: {
    LayoutHeader,
    LayoutFooter,
    TransDefault,
    TransInit,
    Modal
  },
  computed: {
    transType () {
      return this.$store.getters["trans/currentTrans"] || "null";
    },
    hasTrans () {
      return this.$store.getters["trans/hasTrans"];
    },
    shouldPlay () {
      return this.$store.getters["trans/shouldPlay"];
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
