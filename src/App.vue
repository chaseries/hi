<template>
  <div id="app">
    <modal></modal>
    <trans-container></trans-container>
    <transition :duration="transDuration" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import * as settings from "./settings";
import TransContainer from "VUE_COMPONENT/trans/Container.vue";
import Modal from "VUE_COMPONENT/modal/Modal.vue";

export default {
  name: "app",
  components: {
    TransContainer,
    Modal
  },
  methods: {
    getTransComponent (trans) {
      if (trans) { return trans.component; }
      return null;
    }
  },
  computed: {
    transDuration () {
      return this.$store.getters["trans/currentTrans"].duration;
    },
    playState () {
      return this.$store.getters["trans/shouldPlay"];
    }
  },
  created () {
    this.$store.commit("trans/initialize", settings.transSettings);
    this.$store.commit("carousel/initialize", settings.carouselSettings);
  }
};
</script>

<style lang="sass">
@import "~SASS/main";
</style>
